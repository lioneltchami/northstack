import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import StructuredData from '@/components/StructuredData';
import Analytics from '@/components/Analytics';

// Optimized font loading with preload and display swap
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  fallback: ['Inter', 'system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  title: {
    default: 'NorthStack Solutions | Enterprise DevOps & Automation for Canadian Businesses',
    template: '%s | NorthStack Solutions',
  },
  description:
    'Enterprise-grade DevOps, cloud infrastructure, and IT automation services in Calgary, Alberta. 7+ years of experience with AWS, Docker, Kubernetes, and modern automation tools.',
  keywords: [
    'DevSecOps',
    'cloud infrastructure',
    'automation',
    'AWS',
    'Calgary',
    'Canada',
    'IT consulting',
    'Docker',
    'Kubernetes',
    'home server',
    'DevOps',
  ],
  authors: [{ name: 'Apoti Tech Inc.' }],
  creator: 'NorthStack Solutions',
  publisher: 'Apoti Tech Inc.',
  metadataBase: new URL('https://northstack.solutions'),
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://northstack.solutions',
    title: 'NorthStack Solutions | Enterprise DevOps & Automation',
    description:
      'Enterprise-grade DevOps, cloud infrastructure, and IT automation services in Calgary, Alberta.',
    siteName: 'NorthStack Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NorthStack Solutions | Enterprise DevOps & Automation',
    description:
      'Enterprise-grade DevOps, cloud infrastructure, and IT automation services in Calgary, Alberta.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Preconnect to external resources for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        <StructuredData />
        <Analytics />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
