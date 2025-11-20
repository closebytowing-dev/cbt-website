'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type VisibilityConfig = {
  masterToggles?: {
    enableOnlineBooking: boolean;
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

  const handleToggle = () => {
    if (!config) return;

    const currentValue = config.masterToggles?.enableOnlineBooking !== false;
    setConfig({
      ...config,
      masterToggles: {
        enableOnlineBooking: !currentValue,
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
                  onClick={handleToggle}
                  className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                    config.masterToggles?.enableOnlineBooking !== false ? 'bg-yellow-400' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                      config.masterToggles?.enableOnlineBooking !== false ? 'translate-x-9' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

