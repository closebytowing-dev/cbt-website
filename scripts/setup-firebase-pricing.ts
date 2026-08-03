// scripts/setup-firebase-pricing.ts
// Run this script to populate Firestore with pricing data

import { adminDb } from "../src/lib/firebaseAdmin";

async function setupPricing() {
  try {
    console.log("Setting up pricing data in Firestore...");

    const pricingData = {
      // Service prices (base prices before discount)
      services: {
        "Battery Jump Start": {
          basePrice: 88,
          label: "Jump start",
          discountRate: 0.15, // 15% online discount
          description: "Professional battery jump start service"
        },
        "Lockout Service": {
          basePrice: 88,
          label: "Lockout",
          discountRate: 0.15,
          description: "Car lockout service - unlock your vehicle"
        },
        "Tire Change": {
          basePrice: 88,
          label: "Tire change",
          discountRate: 0.15,
          description: "Flat tire change service"
        },
        "Fuel Delivery": {
          basePrice: 88,
          label: "Fuel delivery service",
          discountRate: 0.15,
          description: "Emergency fuel delivery"
        },
        "Winch-Out / Recovery": {
          basePrice: 195,
          label: "Recovery (port-to-port, 1 hr min.)",
          discountRate: 0,
          description: "Vehicle recovery and winch-out service"
        },
        "Collision Recovery": {
          basePrice: 195,
          label: "Recovery (port-to-port, 1 hr min.)",
          discountRate: 0,
          description: "Emergency collision recovery and towing"
        },
        "Emergency Roadside Assistance": {
          basePrice: 65,
          label: "Roadside service",
          discountRate: 0.15,
          description: "General roadside assistance"
        },
        "Impound": {
          basePrice: 0,
          label: "Impound",
          discountRate: 0,
          description: "Vehicle impound service"
        }
      },

      // Towing prices — ONE unified "Towing" service. Local/Long-Distance were
      // collapsed 2026-08 (distance is a rate detail billed via Tow Miles / Travel
      // Miles, not a separate service). Hookup is $75 platform-wide. Do NOT reintroduce
      // "Local Towing" / "Long-Distance Towing" or the old $65 two-tier hookup.
      towing: {
        "Towing": {
          hookupFee: 75,
          perMileRate: 8,
          minimumMiles: 5,
          discountRate: 0.15,
          description: "Towing service"
        }
      },

      // Travel/dispatch rates
      rates: {
        travelRate: 1.75, // per mile for base to pickup
        onlineDiscountRate: 0.15, // 15% discount
      }
    };

    // Write services pricing
    const servicesRef = adminDb.collection("prices").doc("services");
    await servicesRef.set(pricingData.services);
    console.log("✓ Services pricing uploaded");

    // Write towing pricing
    const towingRef = adminDb.collection("prices").doc("towing");
    await towingRef.set(pricingData.towing);
    console.log("✓ Towing pricing uploaded");

    // Write rates
    const ratesRef = adminDb.collection("prices").doc("rates");
    await ratesRef.set(pricingData.rates);
    console.log("✓ Rates uploaded");

    console.log("\n✅ All pricing data successfully uploaded to Firestore!");
    console.log("Collection: prices");
    console.log("Documents: services, towing, rates");

  } catch (error) {
    console.error("Error setting up pricing:", error);
    throw error;
  }
}

// Run the script
setupPricing()
  .then(() => {
    console.log("\n🎉 Setup complete!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n❌ Setup failed:", error);
    process.exit(1);
  });
