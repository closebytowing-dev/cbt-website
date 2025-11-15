import { initializePricing, quoteWithBreakdownAsync, applyOnlineDiscount } from '../src/lib/pricing-client';

async function debugJumpStartPricing() {
  console.log('🔍 Debugging Jump Start Pricing...\n');

  try {
    // Initialize pricing
    await initializePricing();
    console.log('✅ Pricing initialized\n');

    // Fetch Jump Start pricing (same way the hook does it)
    const breakdown = await quoteWithBreakdownAsync('Jump Start');

    console.log('📊 Pricing Breakdown:');
    console.log('-------------------');
    console.log('Service Name:', 'Jump Start');
    console.log('Base Price:', breakdown.base);
    console.log('Mileage:', breakdown.mileage);
    console.log('Total:', breakdown.total);
    console.log('\nBreakdown Items:');
    breakdown.items.forEach((item: any) => {
      console.log(`  - ${item.label}: $${item.amount}`);
    });

    // Calculate online price (15% discount)
    const onlinePrice = applyOnlineDiscount(breakdown.base, 0.15);
    console.log('\n💰 Calculated Prices:');
    console.log('-------------------');
    console.log('Standard Price:', `$${breakdown.base}`);
    console.log('Online Price (15% off):', `$${onlinePrice}`);

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

debugJumpStartPricing();
