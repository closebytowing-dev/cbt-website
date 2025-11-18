'use client';

import { useState, useEffect } from 'react';

type VisibilityConfig = {
  masterToggles: {
    enableOnlineBooking: boolean;
  };
  header: {
    logo: boolean;
    phoneButton: boolean;
    servicesMenu: boolean;
    reviewsLink: boolean;
    serviceAreaLink: boolean;
    aboutLink: boolean;
    contactLink: boolean;
    loginLinks: boolean;
  };
  homePage: {
    hero: boolean;
    value: boolean;
    reviews: boolean;
    services: boolean;
    serviceArea: boolean;
    faq: boolean;
  };
  footer: {
    mainFooter: boolean;
    backToTop: boolean;
    partnerLinks: boolean;
  };
  cta: {
    phoneButtons: boolean;
    onlineBookingButton: boolean;
    whatsappButton: boolean;
  };
  popup: {
    leftPopup: boolean;
    mobileBottomBar: boolean;
  };
};

const defaultConfig: VisibilityConfig = {
  masterToggles: {
    enableOnlineBooking: true,
  },
  header: {
    logo: true,
    phoneButton: true,
    servicesMenu: true,
    reviewsLink: true,
    serviceAreaLink: true,
    aboutLink: true,
    contactLink: true,
    loginLinks: true,
  },
  homePage: {
    hero: true,
    value: true,
    reviews: true,
    services: true,
    serviceArea: true,
    faq: true,
  },
  footer: {
    mainFooter: true,
    backToTop: true,
    partnerLinks: true,
  },
  cta: {
    phoneButtons: true,
    onlineBookingButton: true,
    whatsappButton: true,
  },
  popup: {
    leftPopup: true,
    mobileBottomBar: true,
  },
};

export function useVisibility() {
  const [config, setConfig] = useState<VisibilityConfig>(defaultConfig);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

// Helper function to check if a specific element is visible
export function useElementVisibility(
  section: keyof VisibilityConfig,
  element: string
): boolean {
  const { config, loading } = useVisibility();

  if (loading) return true; // Show by default while loading

  return config[section][element as keyof typeof config[typeof section]] ?? true;
}
