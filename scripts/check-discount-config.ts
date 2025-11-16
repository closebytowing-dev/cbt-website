// Check current online discount configuration in Firebase
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

async function checkDiscountConfig() {
  try {
    console.log("\n=== CHECKING ONLINE DISCOUNT CONFIGURATION ===\n");

    // Get features document
    const featuresRef = db.collection("Price & Rate config").doc("features");
    const featuresDoc = await featuresRef.get();

    if (!featuresDoc.exists) {
      console.error("❌ Features document does not exist!");
      process.exit(1);
    }

    const data = featuresDoc.data();
    console.log("📄 Full features config:");
    console.log(JSON.stringify(data, null, 2));

    console.log("\n📊 Online Discount Settings:");
    const onlineDiscount = data?.pricing?.onlineDiscount;

    if (onlineDiscount) {
      console.log("  ✅ Enabled:", onlineDiscount.enabled);
      console.log("  ✅ Rate:", onlineDiscount.rate, `(${Math.round(onlineDiscount.rate * 100)}%)`);
      console.log("  ✅ Label:", onlineDiscount.label);
    } else {
      console.log("  ❌ Online discount configuration not found!");
    }

    console.log("\n=== DONE ===\n");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error checking discount config:", error);
    process.exit(1);
  }
}

checkDiscountConfig();
