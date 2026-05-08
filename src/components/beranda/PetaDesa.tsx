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
          Menampilkan Titik Lokasi Kantor Kepala Desa Kampale
        </p>
      </div>

      {/* Container Peta Google Maps */}
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15918.423719047913!2d119.9868779!3d-3.914275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d95d183762644e1%3A0xd4322b4f91866497!2sKantor%20Kepala%20Desa%20Kampale!5e0!3m2!1sid!2sid!4v1715157073000!5m2!1sid!2sid" 
        width="100%" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}