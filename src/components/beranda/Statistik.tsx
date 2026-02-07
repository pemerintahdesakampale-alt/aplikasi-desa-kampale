'use client'; // ← wajib karena ada interaktivitas (hover & scroll)

export default function Statistik() {
  const data = [
    { value: "3052", label: "Penduduk" },
    { value: "1512", label: "Laki-Laki" },
    { value: "910", label: "Kepala Keluarga" },
    { value: "1540", label: "Perempuan" },
    { value: "0", label: "Penduduk Sementara" },
    { value: "778", label: "Jumlah Rumah" },
  ];

  return (
    <section id="administrasi">
      <div className="wrap" style={{
        padding: '0 px',
        textAlign: 'center',
      }}>
        {/* Header */}
        <h2 style={{
          color: '#2563eb',
          fontSize: '28px',
          fontWeight: 'bold',
          margin: '0 0 8px 0',
        }}>
          Administrasi Penduduk
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#4b5563',
          marginBottom: '32px',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 32px',
        }}>
          Sistem digital yang berfungsi mempermudah pengelolaan data dan informasi terkait dengan kependudukan dan pendayagunaannya untuk pelayanan publik yang efektif dan efisien.
        </p>

        {/* Grid 2 Kolom */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '24px',
        }}>
          {data.map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px',
              background: '#f9fafb',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              transition: 'background 0.2s',
            }} onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.background = '#f9fafb'}>
              {/* Angka Biru Gradient */}
              <div style={{
                width: '120px',
                height: '60px',
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                fontSize: '24px',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
                {item.value}
              </div>
              {/* Label */}
              <div style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#111827',
                textAlign: 'left',
              }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}