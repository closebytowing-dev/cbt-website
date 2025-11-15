// Complete database reorganization script
import { adminDb } from '../src/lib/firebaseAdmin';
import { FieldValue } from 'firebase-admin/firestore';

async function reorganizeDatabase() {
  console.log('🚀 STARTING COMPLETE DATABASE REORGANIZATION');
  console.log('═'.repeat(80));
  console.log('\n');

  try {
    // ============================================================================
    // STEP 1: CREATE config/pricing (UNIFIED PRICING - SINGLE SOURCE OF TRUTH)
    // ============================================================================
    console.log('📝 Step 1: Creating config/pricing with unified pricing...');

    const configPricing = {
      version: '2.0',
      lastUpdated: new Date().toISOString(),
      updatedBy: 'system_migration',
      description: 'Unified pricing configuration - single source of truth',

      base: {
        travelRate: 1.75,                    // Using $1.75 (from services/settings - more common)
        onlineDiscountRate: 0.15,            // 15% online discount
        description: 'Base rates for calculations'
      },

      services: {
        'Battery Jump Start': {
          basePrice: 88,
          label: 'Jump start',
          description: 'Professional battery jump start service',
          calcType: 'ONSITE',
          discountEligible: true,
          afterHoursEligible: true,
          displayOrder: 40,
          active: true
        },
        'Lockout Service': {
          basePrice: 88,
          label: 'Lockout',
          description: 'Car lockout service - unlock your vehicle',
          calcType: 'ONSITE',
          discountEligible: true,
          afterHoursEligible: true,
          displayOrder: 30,
          active: true
        },
        'Tire Change': {
          basePrice: 88,
          label: 'Tire change',
          description: 'Flat tire change service',
          calcType: 'ONSITE',
          discountEligible: true,
          afterHoursEligible: true,
          displayOrder: 50,
          active: true
        },
        'Fuel Delivery': {
          basePrice: 88,
          label: 'Fuel delivery service',
          description: 'Emergency fuel delivery',
          calcType: 'ONSITE',
          discountEligible: true,
          afterHoursEligible: true,
          displayOrder: 60,
          active: true
        },
        'Winch-Out / Recovery': {
          basePrice: 195,
          label: 'Recovery (port-to-port, 1 hr min.)',
          description: 'Vehicle recovery and winch-out service',
          calcType: 'RECOVERY',
          hourlyRate: 195,
          minHours: 1,
          portToPort: true,
          discountEligible: false,
          afterHoursEligible: true,
          displayOrder: 80,
          active: true
        },
        'Collision Recovery': {
          basePrice: 195,
          label: 'Recovery (port-to-port, 1 hr min.)',
          description: 'Emergency collision recovery and towing',
          calcType: 'RECOVERY',
          hourlyRate: 195,
          minHours: 1,
          portToPort: true,
          discountEligible: false,
          afterHoursEligible: true,
          displayOrder: 90,
          active: true
        },
        'Emergency Roadside Assistance': {
          basePrice: 65,
          label: 'Roadside service',
          description: 'General roadside assistance',
          calcType: 'ONSITE',
          discountEligible: true,
          afterHoursEligible: true,
          displayOrder: 70,
          active: true
        },
        'Impound': {
          basePrice: 0,
          label: 'Impound',
          description: 'Vehicle impound service - call for pricing',
          calcType: 'CUSTOM',
          discountEligible: false,
          afterHoursEligible: false,
          displayOrder: 100,
          active: true
        }
      },

      towing: {
        'Local Towing': {
          hookupFee: 75,
          perMileRate: 8,
          minimumMiles: 5,
          label: 'Local towing service',
          description: 'Local towing within service area',
          calcType: 'TOWING',
          discountEligible: true,
          afterHoursEligible: true,
          displayOrder: 10,
          active: true
        },
        'Long-Distance Towing': {
          hookupFee: 65,
          perMileRate: 8,
          minimumMiles: 5,
          label: 'Long-distance towing service',
          description: 'Long-distance towing service',
          calcType: 'TOWING',
          discountEligible: true,
          afterHoursEligible: true,
          displayOrder: 20,
          active: true
        }
      }
    };

    await adminDb.collection('config').doc('pricing').set(configPricing);
    console.log('✅ Created config/pricing\n');

    // ============================================================================
    // STEP 2: CREATE config/time_multipliers (AFTER-HOURS PRICING)
    // ============================================================================
    console.log('📝 Step 2: Creating config/time_multipliers...');

    const timeMultipliers = {
      version: '1.0',
      enabled: true,
      timezone: 'America/Los_Angeles',
      lastUpdated: new Date().toISOString(),
      description: 'Time-based pricing multipliers for after-hours service',

      periods: [
        {
          id: 'standard',
          name: 'Standard Hours',
          startTime: '07:00',
          endTime: '17:00',
          multiplier: 1.0,
          daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
          description: '7 AM - 5 PM (Standard rate)',
          badge: 'Standard',
          color: '#10B981',
          active: true
        },
        {
          id: 'evening',
          name: 'Evening Hours',
          startTime: '17:00',
          endTime: '20:00',
          multiplier: 1.2,
          daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
          description: '5 PM - 8 PM (20% surcharge)',
          badge: 'Evening +20%',
          color: '#F59E0B',
          active: true
        },
        {
          id: 'night',
          name: 'Night Hours',
          startTime: '20:00',
          endTime: '23:00',
          multiplier: 1.3,
          daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
          description: '8 PM - 11 PM (30% surcharge)',
          badge: 'Night +30%',
          color: '#EF4444',
          active: true
        },
        {
          id: 'late_night',
          name: 'Late Night/Early Morning',
          startTime: '23:00',
          endTime: '07:00',
          multiplier: 1.5,
          daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
          description: '11 PM - 7 AM (50% surcharge)',
          badge: 'Late Night +50%',
          color: '#DC2626',
          active: true
        }
      ],

      holidays: {
        enabled: false,
        multiplier: 1.5,
        dates: [],
        description: 'Holiday pricing (not yet enabled)'
      },

      weekends: {
        enabled: false,
        multiplier: 1.0,
        daysOfWeek: [0, 6],
        description: 'Weekend pricing (not yet enabled)'
      }
    };

    await adminDb.collection('config').doc('time_multipliers').set(timeMultipliers);
    console.log('✅ Created config/time_multipliers\n');

    // ============================================================================
    // STEP 3: CREATE config/service_catalog (SERVICE ORGANIZATION)
    // ============================================================================
    console.log('📝 Step 3: Creating config/service_catalog...');

    const serviceCatalog = {
      version: '1.0',
      lastUpdated: new Date().toISOString(),
      description: 'Service categorization and organization',

      categories: {
        towing: {
          name: 'Towing Services',
          description: 'Vehicle towing and transport',
          displayOrder: 1,
          icon: 'truck',
          services: ['Local Towing', 'Long-Distance Towing'],
          active: true
        },
        roadside: {
          name: 'Roadside Assistance',
          description: 'Emergency roadside services',
          displayOrder: 2,
          icon: 'wrench',
          services: [
            'Battery Jump Start',
            'Lockout Service',
            'Tire Change',
            'Fuel Delivery',
            'Emergency Roadside Assistance'
          ],
          active: true
        },
        recovery: {
          name: 'Recovery Services',
          description: 'Vehicle recovery and extraction',
          displayOrder: 3,
          icon: 'rescue',
          services: ['Winch-Out / Recovery', 'Collision Recovery'],
          active: true
        },
        specialized: {
          name: 'Specialized Services',
          description: 'Other specialized services',
          displayOrder: 4,
          icon: 'star',
          services: ['Impound'],
          active: true
        }
      }
    };

    await adminDb.collection('config').doc('service_catalog').set(serviceCatalog);
    console.log('✅ Created config/service_catalog\n');

    // ============================================================================
    // STEP 4: CREATE config/company (COMPANY INFORMATION)
    // ============================================================================
    console.log('📝 Step 4: Creating config/company...');

    const companyConfig = {
      version: '1.0',
      lastUpdated: new Date().toISOString(),

      info: {
        name: 'CloseBy Towing',
        phone: '(858) 999-9293',
        email: 'Closebytowing@gmail.com',
        address: '10325 Caminito Cuervo, San Diego, CA 92108',
        website: 'https://closebytowing.com'
      },

      location: {
        office: {
          address: '10325 Caminito Cuervo, San Diego, CA 92108',
          description: 'Main office location for travel distance calculations',
          coordinates: null  // Can be added later
        },
        serviceArea: {
          city: 'San Diego',
          state: 'CA',
          country: 'USA',
          radius: 50,
          unit: 'miles'
        }
      },

      operations: {
        timezone: 'America/Los_Angeles',
        hours: {
          type: '24/7',
          emergency: true,
          description: '24/7 Emergency Towing Service'
        }
      },

      settings: {
        invoicePrefix: 'INV-',
        taxRate: 0,
        acceptedPaymentMethods: ['Cash', 'Card', 'Check'],
        currency: 'USD'
      }
    };

    await adminDb.collection('config').doc('company').set(companyConfig);
    console.log('✅ Created config/company\n');

    // ============================================================================
    // STEP 5: CREATE config/features (FEATURE FLAGS)
    // ============================================================================
    console.log('📝 Step 5: Creating config/features...');

    const features = {
      version: '1.0',
      lastUpdated: new Date().toISOString(),

      pricing: {
        afterHoursPricing: {
          enabled: false,  // Set to true when ready to activate
          description: 'Enable time-based pricing multipliers'
        },
        onlineDiscount: {
          enabled: true,
          description: '15% discount for online bookings'
        },
        dynamicPricing: {
          enabled: false,
          description: 'Enable dynamic pricing based on demand'
        }
      },

      booking: {
        onlineBooking: {
          enabled: true,
          description: 'Allow customers to book online'
        },
        squarePayments: {
          enabled: true,
          description: 'Square payment integration'
        },
        autoAdvance: {
          enabled: true,
          description: 'Auto-advance booking steps'
        }
      },

      notifications: {
        smsNotifications: {
          enabled: false,
          description: 'SMS notifications for customers'
        },
        emailNotifications: {
          enabled: false,
          description: 'Email notifications'
        }
      }
    };

    await adminDb.collection('config').doc('features').set(features);
    console.log('✅ Created config/features\n');

    // ============================================================================
    // STEP 6: ARCHIVE OLD COLLECTIONS
    // ============================================================================
    console.log('📝 Step 6: Archiving old pricing collections...');

    // Archive old prices collection
    const pricesSnapshot = await adminDb.collection('prices').get();
    for (const doc of pricesSnapshot.docs) {
      await adminDb.collection('_archived_prices').doc(doc.id).set({
        ...doc.data(),
        archivedAt: new Date().toISOString(),
        archivedReason: 'Migrated to config/pricing'
      });
    }
    console.log('✅ Archived prices/ → _archived_prices/\n');

    // Archive old services collection (keep for dispatcher app for now)
    const servicesSnapshot = await adminDb.collection('services').get();
    for (const doc of servicesSnapshot.docs) {
      await adminDb.collection('_archived_services').doc(doc.id).set({
        ...doc.data(),
        archivedAt: new Date().toISOString(),
        archivedReason: 'Migrated to config/pricing'
      });
    }
    console.log('✅ Archived services/ → _archived_services/\n');

    // Archive old settings/pricing
    const settingsPricingDoc = await adminDb.collection('settings').doc('pricing').get();
    if (settingsPricingDoc.exists) {
      await adminDb.collection('_archived_settings').doc('pricing').set({
        ...settingsPricingDoc.data(),
        archivedAt: new Date().toISOString(),
        archivedReason: 'Migrated to config/pricing and config/time_multipliers'
      });
    }
    console.log('✅ Archived settings/pricing → _archived_settings/pricing\n');

    // ============================================================================
    // SUMMARY
    // ============================================================================
    console.log('\n');
    console.log('═'.repeat(80));
    console.log('✅ DATABASE REORGANIZATION COMPLETE!');
    console.log('═'.repeat(80));
    console.log('\n');
    console.log('📊 NEW STRUCTURE:');
    console.log('  ✅ config/pricing          - Unified pricing (services + towing + rates)');
    console.log('  ✅ config/time_multipliers - After-hours pricing (1.2x, 1.3x, 1.5x)');
    console.log('  ✅ config/service_catalog  - Service categorization');
    console.log('  ✅ config/company          - Company info & settings');
    console.log('  ✅ config/features         - Feature flags');
    console.log('\n');
    console.log('📦 ARCHIVED:');
    console.log('  ✅ _archived_prices/       - Old prices collection');
    console.log('  ✅ _archived_services/     - Old services collection');
    console.log('  ✅ _archived_settings/     - Old settings/pricing');
    console.log('\n');
    console.log('⚠️  NEXT STEPS:');
    console.log('  1. Update pricing-client.ts to use config/pricing');
    console.log('  2. Implement time multiplier logic');
    console.log('  3. Test all pricing calculations');
    console.log('  4. Enable after-hours pricing in config/features');
    console.log('  5. Delete archived collections when confirmed working');
    console.log('\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error during reorganization:', error);
    process.exit(1);
  }
}

reorganizeDatabase();
