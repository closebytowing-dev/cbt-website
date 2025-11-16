// Add online discount configuration to Firebase
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

async function addOnlineDiscountConfig() {
  try {
    console.log("\n=== ADDING ONLINE DISCOUNT CONFIGURATION ===\n");

    // Get current features document
    const featuresRef = db.collection("Price & Rate config").doc("features");
    const featuresDoc = await featuresRef.get();

    if (!featuresDoc.exists) {
      console.error("❌ Features document does not exist!");
      process.exit(1);
    }

    const currentData = featuresDoc.data();
    console.log("📄 Current features config:", JSON.stringify(currentData, null, 2));

    // Add online discount configuration
    const updatedData = {
      ...currentData,
      pricing: {
        ...currentData?.pricing,
        onlineDiscount: {
          enabled: true,
          rate: 0.15,
          label: "Online Booking Discount"
        }
      }
    };

    // Update Firebase
    await featuresRef.set(updatedData);

    console.log("\n✅ Successfully added online discount configuration!");
    console.log("\nNew configuration:");
    console.log(JSON.stringify(updatedData, null, 2));
    console.log("\n=== DONE ===\n");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error adding online discount config:", error);
    process.exit(1);
  }
}

addOnlineDiscountConfig();
