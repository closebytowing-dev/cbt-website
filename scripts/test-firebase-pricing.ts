// scripts/test-firebase-pricing.ts
// Test script to verify Firebase pricing integration

import { db } from "../src/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

async function testFirebasePricing() {
  try {
    console.log("Testing Firebase pricing integration...\n");

    // Fetch all documents from prices collection
    const pricesCollection = collection(db, "prices");
    const snapshot = await getDocs(pricesCollection);

    if (snapshot.empty) {
      console.error("❌ No pricing data found in Firestore!");
      process.exit(1);
    }

    console.log(`✅ Found ${snapshot.size} pricing documents:\n`);

    snapshot.forEach((doc) => {
      console.log(`📄 Document: ${doc.id}`);
      console.log(JSON.stringify(doc.data(), null, 2));
      console.log("\n");
    });

    console.log("✅ Firebase pricing integration is working correctly!");
    process.exit(0);

  } catch (error) {
    console.error("❌ Error fetching pricing from Firebase:", error);
    process.exit(1);
  }
}

testFirebasePricing();
