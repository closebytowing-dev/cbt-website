// Set online discount rate in Firebase
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

async function setDiscountRate() {
  try {
    // Get the discount rate from command line argument
    const rateArg = process.argv[2];

    if (!rateArg) {
      console.error("❌ Please provide a discount rate as an argument");
      console.log("\nUsage: npx tsx scripts/set-discount-rate.ts <rate>");
      console.log("Examples:");
      console.log("  npx tsx scripts/set-discount-rate.ts 0.15  (for 15%)");
      console.log("  npx tsx scripts/set-discount-rate.ts 0.10  (for 10%)");
      console.log("  npx tsx scripts/set-discount-rate.ts 0.20  (for 20%)");
      process.exit(1);
    }

    const rate = parseFloat(rateArg);

    if (isNaN(rate) || rate < 0 || rate > 1) {
      console.error("❌ Invalid rate. Must be a number between 0 and 1 (e.g., 0.15 for 15%)");
      process.exit(1);
    }

    console.log(`\n=== SETTING ONLINE DISCOUNT RATE TO ${Math.round(rate * 100)}% ===\n`);

    // Get features document
    const featuresRef = db.collection("Price & Rate config").doc("features");
    const featuresDoc = await featuresRef.get();

    if (!featuresDoc.exists) {
      console.error("❌ Features document does not exist!");
      process.exit(1);
    }

    const currentData = featuresDoc.data();

    // Update the discount rate
    const updatedData = {
      ...currentData,
      pricing: {
        ...currentData?.pricing,
        onlineDiscount: {
          enabled: true,
          rate: rate,
          label: "Online Booking Discount"
        }
      }
    };

    // Update Firebase
    await featuresRef.set(updatedData);

    console.log(`✅ Successfully updated online discount rate to ${rate} (${Math.round(rate * 100)}%)`);
    console.log("\n=== DONE ===\n");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error setting discount rate:", error);
    process.exit(1);
  }
}

setDiscountRate();
