// Check Firebase pricing configuration for time multipliers
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Support both old and new credential formats
let serviceAccount: any;

if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
} else if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) {
  serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  };
} else {
  throw new Error("Missing Firebase credentials");
}

let app;
if (getApps().length === 0) {
  app = initializeApp({
    credential: cert(serviceAccount),
  });
} else {
  app = getApps()[0];
}

const db = getFirestore(app);

async function checkPricingConfig() {
  try {
    console.log("\n=== PRICING CONFIGURATION CHECK ===\n");

    // Check features (after-hours pricing enabled?)
    const featuresDoc = await db.collection("Price & Rate config").doc("features").get();
    const features = featuresDoc.data();

    console.log("1. Features Configuration:");
    console.log("   After-hours pricing enabled:", features?.pricing?.afterHoursPricing?.enabled);
    console.log("");

    // Check time multipliers
    const timeMultipliersDoc = await db.collection("Price & Rate config").doc("time_multipliers").get();
    const timeMultipliers = timeMultipliersDoc.data();

    console.log("2. Time Multipliers Configuration:");
    console.log("   Enabled:", timeMultipliers?.enabled);
    console.log("   Timezone:", timeMultipliers?.timezone);
    console.log("   Periods:", JSON.stringify(timeMultipliers?.periods || [], null, 2));
    console.log("");

    // Check current time and what multiplier should apply
    const now = new Date();
    const currentTime = now.toLocaleTimeString('en-US', {
      timeZone: timeMultipliers?.timezone || 'America/Los_Angeles',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
    const currentDay = now.getDay();

    console.log("3. Current Time Check:");
    console.log("   Current time:", currentTime);
    console.log("   Current day:", currentDay, ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][currentDay]);

    // Find matching period
    let matchingPeriod = null;
    if (timeMultipliers?.enabled && timeMultipliers?.periods) {
      for (const period of timeMultipliers.periods) {
        if (!period.active) continue;
        if (!period.daysOfWeek.includes(currentDay)) continue;

        if (period.startTime > period.endTime) {
          if (currentTime >= period.startTime || currentTime < period.endTime) {
            matchingPeriod = period;
            break;
          }
        } else {
          if (currentTime >= period.startTime && currentTime < period.endTime) {
            matchingPeriod = period;
            break;
          }
        }
      }
    }

    if (matchingPeriod) {
      console.log("   ✅ MATCHING PERIOD FOUND:", matchingPeriod.name);
      console.log("   Multiplier:", matchingPeriod.multiplier);
      console.log("   Badge:", matchingPeriod.badge);
    } else {
      console.log("   ⚠️  NO MATCHING PERIOD (should use 1.0 multiplier)");
    }
    console.log("");

    // Check services for afterHoursEligible flag
    const servicesSnapshot = await db.collection("services").get();

    console.log("4. Services After-Hours Eligibility:");
    servicesSnapshot.forEach(doc => {
      const service = doc.data();
      console.log(`   ${service.name}: afterHoursEligible = ${service.afterHoursEligible || false}`);
    });
    console.log("");

    // Calculate sample pricing for Local Towing
    console.log("5. Sample Pricing Calculation (Local Towing):");
    const towingService = servicesSnapshot.docs.find(doc => doc.data().name === "Local Towing");
    if (towingService) {
      const service = towingService.data();
      const hookup = service.hookupFee || 65;
      const perMile = service.perMileRate || 8;
      const miles = 10; // Sample 10 miles

      console.log("   Base pricing:");
      console.log("     Hook-up:", hookup);
      console.log("     10 mi × $" + perMile + ":", miles * perMile);
      console.log("     Total:", hookup + (miles * perMile));

      if (matchingPeriod && service.afterHoursEligible) {
        const afterHoursTotal = (hookup + (miles * perMile)) * matchingPeriod.multiplier;
        console.log("   After-hours pricing (multiplier: " + matchingPeriod.multiplier + "):");
        console.log("     Total:", afterHoursTotal);
        console.log("   After 15% online discount:", Math.round(afterHoursTotal * 0.85));
      } else if (!service.afterHoursEligible) {
        console.log("   ⚠️  Service NOT eligible for after-hours pricing");
      }
    }

    console.log("\n=== END CHECK ===\n");
    process.exit(0);

  } catch (error) {
    console.error("Error checking pricing config:", error);
    process.exit(1);
  }
}

checkPricingConfig();
