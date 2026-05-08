export default function PetaDesa() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1000px',
        margin: 'auto',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(229, 231, 235, 0.8)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        backgroundColor: '#fff',
      }}
    >
      {/* Header */}
      <div style={{
        padding: '16px 20px',
        borderBottom: '1px solid #e5e7eb',
        backgroundColor: '#f9fafb',
      }}>
        <h2 style={{
          margin: '0 0 4px 0',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#2563eb',
          textTransform: 'uppercase',
        }}>
          PETA DESA
        </h2>
        <p style={{
          margin: '0',
          fontSize: '14px',
          color: '#4b5563',
        }}>
          Menampilkan Peta Desa Dengan <em>Interest Point</em> Desa Kampale
        </p>
      </div>

      {/* Container Peta Google Maps */}
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53554.30286788318!2d119.97707867137997!3d-3.9276953834267245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d95d1d348040eeb%3A0x6ff3783bd75613d4!2sKampale%2C%20Kec.%20Duapitue%2C%20Kabupaten%20Sidenreng%20Rappang%2C%20Sulawesi%20Selatan!5e0!3m2!1sid!2sid!4v1778228123082!5m2!1sid!2sid" 
        width="100%" 
        height="400" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}