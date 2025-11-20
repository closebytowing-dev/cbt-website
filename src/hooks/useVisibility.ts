'use client';

import { useState, useEffect } from 'react';

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
        const response = await fetch('/api/admin/visibility', {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
          },
        });
        const data = await response.json();
        setConfig(data.config || defaultConfig);
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
