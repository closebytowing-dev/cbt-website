import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebaseAdmin';

// Disable caching for this route
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// GET - Fetch current visibility configuration
export async function GET() {
  try {
    const docRef = adminDb.collection('settings').doc('visibility');
    const doc = await docRef.get();

    if (doc.exists) {
      return NextResponse.json({ config: doc.data() });
    } else {
      // Return default config if not found
      const defaultConfig = {
        customerRequestForm: {
          leftPopup: true,
          popupLauncher: true,
          saveBanners: true,
        },
      };
      return NextResponse.json({ config: defaultConfig });
    }
  } catch (error) {
    console.error('Error fetching visibility config:', error);
    return NextResponse.json({ error: 'Failed to fetch config' }, { status: 500 });
  }
}

// POST - Update visibility configuration
export async function POST(request: NextRequest) {
  try {
    const { config } = await request.json();

    // Save to Firestore
    const docRef = adminDb.collection('settings').doc('visibility');
    await docRef.set({
      ...config,
      updatedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating visibility config:', error);
    return NextResponse.json({ success: false, error: 'Failed to save config' }, { status: 500 });
  }
}
