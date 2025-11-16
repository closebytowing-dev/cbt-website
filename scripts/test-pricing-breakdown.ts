// Test script to verify pricing breakdown logic
import { quoteWithTravel, initializePricing } from '../src/lib/pricing-client';

async function test() {
  console.log('🧪 Testing pricing breakdown logic...\n');

  try {
    // Initialize pricing first
    await initializePricing();
    console.log('✅ Pricing initialized\n');

    // Test 1: Towing with tow miles and travel miles
    console.log('Test 1: Local Towing with 15 tow miles and 12 travel miles');
    const breakdown1 = quoteWithTravel('Local Towing', 15, 12);
    console.log('Result:', JSON.stringify(breakdown1, null, 2));
    console.log('Items:');
    breakdown1.items.forEach((item, i) => {
      console.log(`  ${i + 1}. "${item.label}" = $${item.amount}`);
    });
    console.log('Total:', breakdown1.base);
    console.log('');

    // Test 2: Towing with 0 tow miles
    console.log('Test 2: Local Towing with 0 tow miles and 12 travel miles');
    const breakdown2 = quoteWithTravel('Local Towing', 0, 12);
    console.log('Result:', JSON.stringify(breakdown2, null, 2));
    console.log('Items:');
    breakdown2.items.forEach((item, i) => {
      console.log(`  ${i + 1}. "${item.label}" = $${item.amount}`);
    });
    console.log('Total:', breakdown2.base);
    console.log('');

    // Test 3: Non-towing service
    console.log('Test 3: Jump Start with travel miles');
    const breakdown3 = quoteWithTravel('Jump Start', undefined, 12);
    console.log('Result:', JSON.stringify(breakdown3, null, 2));
    console.log('Items:');
    breakdown3.items.forEach((item, i) => {
      console.log(`  ${i + 1}. "${item.label}" = $${item.amount}`);
    });
    console.log('Total:', breakdown3.base);
    console.log('');

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

test();
