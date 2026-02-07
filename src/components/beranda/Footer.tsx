'use client';
export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "linear-gradient(90deg, #065f46, #0da75a)",
      color: 'white',
      padding: '32px 20px',
      fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      <div className="wrap" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '32px',
        maxWidth: '1200px',
        margin: 'auto',
      }}>

        {/* Kolom 1: Pemerintah Desa */}
        <div>
          <img
          src="/images/logo.jpg"
          alt="Logo Desa"
          style={{
          width: "45px",
          height: "45px",
          marginRight: "10px",
          borderRadius: "50%",
          border: "none",
        }}
          />
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 8px 0' }}>Pemerintah Desa Kampale</h3>
          <p style={{ fontSize: '14px', lineHeight: '1.5', margin: '0 0 16px 0' }}>
            Jl. Sose Ngenra Dusun II<br/>
            Desa Kampale, Kecamatan Dua Pitue, Kabupaten Sidenreng Rappang<br/>
            Provinsi Sulawesi Selatan, 91681
          </p>
          <p style={{ fontSize: '14px', fontWeight: '600', margin: '0' }}>
            Kode Wilayah: 73.14.09.2010
          </p>
        </div>

        {/* Kolom 2: Hubungi Kami */}
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 16px 0' }}>Hubungi Kami</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span>📞</span>
            <span>085256228055</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span>✉️</span>
            <span>pemerintahdesakampale@gmail.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>▶️</span>
            <span>Pemdes Kampale</span>
          </div>
        </div>

        {/* Kolom 3: Nomor Telepon Penting */}
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 16px 0' }}>Admin Desa Kampale</h3>
          <p style={{ fontSize: '14px', fontWeight: '600', margin: '0 0 8px 0' }}>NANDA ARIS, S.Ak</p>
          {/* Tambahkan nomor penting lainnya jika ada */}
        </div>

        {/* Kolom 4: Jelajahi */}
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 16px 0' }}>Jelajahi</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              "Website",
              "Kemendesa",
              "Kemendagri",
              "website pemerintah kab sidrap",
            ].map((item, i) => (
              <li key={i} style={{ marginBottom: '8px' }}>
                <a href="#" style={{
                  color: 'white',
                  textDecoration: 'underline',
                  fontSize: '14px',
                }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Garis Pemisah */}
      <div style={{
        marginTop: '32px',
        borderTop: '1px solid rgba(255,255,255,0.2)',
        paddingTop: '20px',
      }} />

    </footer>
  );
}