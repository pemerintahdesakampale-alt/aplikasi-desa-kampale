import { AppProvider } from "@/context/AppContext";
import ClientLayout from "@/components/ClientLayout";
import 'ol/ol.css';
import type { Metadata } from 'next';
import Script from 'next/script'; // Import Script untuk JSON-LD

export const metadata: Metadata = {
  metadataBase: new URL('https://desakampale.site'),
  title: {
    default: 'Website Resmi Desa Kampale',
    template: '%s | Desa Kampale' 
  },
  description: 'Portal resmi Pemerintah Desa Kampale. Temukan informasi terbaru, layanan administrasi, profil desa, dan berita terkini.',
  keywords: ['Desa Kampale', 'Kampale', 'Pemerintah Desa Kampale', 'Website Desa', 'Info Desa Kampale'],
  openGraph: {
    title: 'Website Resmi Desa Kampale',
    description: 'Pusat informasi dan layanan masyarakat Desa Kampale.',
    url: 'https://desakampale.site',
    siteName: 'Pemerintah Desa Kampale',
    locale: 'id_ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'kWhWQAgmO3t9ov6dsM6Yo9AVCBvSpo7nS3ef4BHOKh4', // <-- GANTI INI NANTI
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Data Struktur Organisasi untuk Google (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentOrganization',
    name: 'Pemerintah Desa Kampale',
    url: 'https://desaKampale.site',
    logo: 'https://desaKampale.site/logo.png', // Pastikan ada file logo.png di folder public
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kampale',
      addressRegion: 'Sulawesi Tenggara',
      addressCountry: 'ID'
    }
  }

  return (
    <html lang="id">
      <body style={{ margin: 0, padding: 0, border: "none", backgroundColor: "#111" }}>
        {/* Script JSON-LD untuk SEO Instansi */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <AppProvider>
          <ClientLayout>{children}</ClientLayout>
        </AppProvider>
      </body>
    </html>
  );
}