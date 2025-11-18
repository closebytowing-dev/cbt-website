'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type VisibilityConfig = {
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

export default function VisibilityPanel() {
  const router = useRouter();
  const [config, setConfig] = useState<VisibilityConfig | null>(null);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    // Check authentication
    const isAuthenticated = sessionStorage.getItem('adminAuth');
    if (!isAuthenticated) {
      router.push('/admin');
      return;
    }

    // Load current config
    loadConfig();
  }, [router]);

  const loadConfig = async () => {
    try {
      const response = await fetch('/api/admin/visibility');
      const data = await response.json();
      setConfig(data.config);
    } catch (error) {
      console.error('Failed to load config:', error);
    }
  };

  const handleToggle = (section: keyof VisibilityConfig, key: string) => {
    if (!config) return;

    setConfig({
      ...config,
      [section]: {
        ...config[section],
        [key]: !config[section][key as keyof typeof config[typeof section]],
      },
    });
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveMessage('');

    try {
      const response = await fetch('/api/admin/visibility', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ config }),
      });

      const data = await response.json();

      if (data.success) {
        setSaveMessage('✓ Changes saved successfully!');
        setTimeout(() => setSaveMessage(''), 3000);
      } else {
        setSaveMessage('✗ Failed to save changes');
      }
    } catch (error) {
      setSaveMessage('✗ Error saving changes');
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth');
    router.push('/admin');
  };

  if (!config) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0d0d36] via-[#1e1e4a] to-[#0d0d36] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0d36] via-[#1e1e4a] to-[#0d0d36] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 shadow-2xl border border-white/20">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Visibility Control Panel</h1>
              <p className="text-gray-400">Toggle website elements on/off</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Save Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 shadow-2xl border border-white/20">
          <div className="flex justify-between items-center">
            <div>
              {saveMessage && (
                <p className={`font-medium ${saveMessage.includes('✓') ? 'text-green-400' : 'text-red-400'}`}>
                  {saveMessage}
                </p>
              )}
            </div>
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-6 py-3 bg-[#ffba42] hover:bg-[#ffa500] text-[#0d0d36] font-semibold rounded-lg transition-all duration-200 disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>

        {/* Master Toggles - Prominent Section */}
        <div className="mb-6">
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border-2 border-yellow-400/50">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Master Controls
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                <div>
                  <span className="text-white font-semibold text-lg">Enable Online Booking</span>
                  <p className="text-gray-300 text-sm mt-1">Controls popup, banners, and booking buttons site-wide</p>
                </div>
                <button
                  onClick={() => handleToggle('masterToggles', 'enableOnlineBooking')}
                  className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                    config.masterToggles.enableOnlineBooking ? 'bg-yellow-400' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                      config.masterToggles.enableOnlineBooking ? 'translate-x-9' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Control Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Header Section */}
          <ControlSection
            title="Header Elements"
            items={config.header}
            onToggle={(key) => handleToggle('header', key)}
          />

          {/* Home Page Section */}
          <ControlSection
            title="Home Page Sections"
            items={config.homePage}
            onToggle={(key) => handleToggle('homePage', key)}
          />

          {/* Footer Section */}
          <ControlSection
            title="Footer Elements"
            items={config.footer}
            onToggle={(key) => handleToggle('footer', key)}
          />

          {/* CTA Buttons */}
          <ControlSection
            title="CTA Buttons"
            items={config.cta}
            onToggle={(key) => handleToggle('cta', key)}
          />

          {/* Popup/Modal */}
          <ControlSection
            title="Popups & Modals"
            items={config.popup}
            onToggle={(key) => handleToggle('popup', key)}
          />
        </div>

        {/* Info Box */}
        <div className="mt-6 bg-blue-500/10 border border-blue-500/50 rounded-2xl p-6">
          <h3 className="text-blue-400 font-semibold mb-2">ℹ️ How it works</h3>
          <ul className="text-gray-300 space-y-1 text-sm">
            <li>• Toggle switches to hide/show elements on your website</li>
            <li>• Changes take effect immediately after saving</li>
            <li>• Refresh your website to see the changes</li>
            <li>• All changes are stored permanently</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ControlSection({
  title,
  items,
  onToggle,
}: {
  title: string;
  items: Record<string, boolean>;
  onToggle: (key: string) => void;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="space-y-3">
        {Object.entries(items).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <span className="text-gray-200 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </span>
            <button
              onClick={() => onToggle(key)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                value ? 'bg-[#ffba42]' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  value ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
