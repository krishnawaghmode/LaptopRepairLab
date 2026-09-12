import type { Metadata } from 'next';
import { Mukta } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteUrl } from '@/lib/site';

const mukta = Mukta({
  variable: '--font-mukta',
  subsets: ['latin', 'devanagari'],
  weight: ['400', '500', '600', '700'],
});

// const siteUrl =
//   process.env.SITE_URL ||
//   (process.env.NODE_ENV === 'production'
//     ? 'https://laptoprepairlab.tech'
//     : 'http://localhost:3000');
const ogImages = ['/og.jpeg', '/og1.jpeg', '/og2.jpeg'];
const randomOgImage = ogImages[Math.floor(Math.random() * ogImages.length)];
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Laptop Repair Lab | Laptop Repair in Wagholi, Pune',
    template: '%s | Laptop Repair Lab',
  },

  description:
    'Laptop Repair Lab provides reliable laptop repair, screen replacement, battery replacement, keyboard repair and data recovery services in Wagholi, Pune.',

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: 'Laptop Repair Lab | Laptop Repair in Wagholi, Pune',
    description: 'Trusted laptop repair and service center in Wagholi, Pune.',
    url: siteUrl,
    siteName: 'Laptop Repair Lab',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: randomOgImage,
        width: 1200,
        height: 630,
        alt: 'Laptop Repair Lab Wagholi Pune',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Laptop Repair Lab | Wagholi Pune',
    description: 'Laptop repair and service center in Wagholi, Pune.',
    images: [randomOgImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${mukta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-950 font-sans text-slate-100 antialiased">
        <Header />
        <main id="home">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
