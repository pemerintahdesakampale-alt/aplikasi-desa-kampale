import { AppProvider } from "@/context/AppContext";
import ClientLayout from "@/components/ClientLayout";
import 'ol/ol.css';
import type { Metadata } from 'next';
import Script from 'next/script'; // Import Script untuk JSON-LD

export const metadata: Metadata = {
  metadataBase: new URL('https://desakampele.site'),
  title: {
    default: 'Website Resmi Desa Kampele',
    template: '%s | Desa Kampele' 
  },
  description: 'Portal resmi Pemerintah Desa Kampele. Temukan informasi terbaru, layanan administrasi, profil desa, dan berita terkini.',
  keywords: ['Desa Kampele', 'Kampele', 'Pemerintah Desa Kampele', 'Website Desa', 'Info Desa Kampele'],
  openGraph: {
    title: 'Website Resmi Desa Kampele',
    description: 'Pusat informasi dan layanan masyarakat Desa Kampele.',
    url: 'https://desakampele.site',
    siteName: 'Pemerintah Desa Kampele',
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
    name: 'Pemerintah Desa Kampele',
    url: 'https://desakampele.site',
    logo: 'https://desakampele.site/logo.png', // Pastikan ada file logo.png di folder public
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kampele',
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