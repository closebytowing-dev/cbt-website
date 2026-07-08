'use client';

import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

type VisibilityConfig = {
  customerRequestForm?: {
    leftPopup: boolean;
    popupLauncher: boolean;
    saveBanners: boolean;
  };
};

const defaultConfig: VisibilityConfig = {
  customerRequestForm: {
    leftPopup: true,
    popupLauncher: true,
    saveBanners: true,
  },
};

export function useVisibility() {
  const [config, setConfig] = useState<VisibilityConfig>(defaultConfig);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only fetch on client side
    if (typeof window === 'undefined') {
      setLoading(false);
      return;
    }

    async function fetchConfig() {
      try {
        // Public read via the CLIENT SDK — settings/visibility is world-readable
        // (staff-writable) by Firestore rule. Carries NO service-account / Admin-SDK
        // access. Replaces the old /api/admin/visibility Admin-SDK route. (P1.4 #3.)
        const snap = await getDoc(doc(db, 'settings', 'visibility'));
        setConfig(snap.exists() ? (snap.data() as VisibilityConfig) : defaultConfig);
      } catch (error) {
        console.error('Failed to load visibility config:', error);
        setConfig(defaultConfig);
      } finally {
        setLoading(false);
      }
    }

    fetchConfig();
  }, []);

  return { config, loading };
}
