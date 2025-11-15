import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | CloseBy Towing San Diego',
  description: 'Learn how CloseBy Towing collects, uses, and protects your personal information. We are committed to your privacy and data security.',
  keywords: 'privacy policy, data protection, CloseBy Towing privacy, personal information, CCPA compliance, data security',
  openGraph: {
    title: 'Privacy Policy | CloseBy Towing San Diego',
    description: 'Learn how CloseBy Towing collects, uses, and protects your personal information.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
