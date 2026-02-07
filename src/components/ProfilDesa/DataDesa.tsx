export default function DataDesa() {
  return (
    <section id="data-desa" style={{ 
      backgroundColor: 'white',
      color: '#1f2937',
      padding: '40px 0'
    }}>
      <div className="wrap" style={{ 
        padding: '0 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Prasarana Desa */}
        <div style={{ 
          marginBottom: '40px',
          background: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          border: '1px solid #e5e7eb'
        }}>
          <h2 style={{ 
            color: '#047857',
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '24px',
            textAlign: 'left'
          }}>
            Prasarana Desa
          </h2>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '15px',
              lineHeight: '1.6'
            }}>
              <thead>
                <tr>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    NO
                  </th>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    JENIS PRASARANA
                  </th>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    VOLUME
                  </th>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    KONDISI
                  </th>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    LOKASI
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>1.</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Gedung PAUD</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>1 Unit</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Baik</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Dusun I Kampale</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>2.</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Gedung TK</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>1 Unit 1 Unit</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Baik</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Dusun I Kampale<br />Dusun II Kampale</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>3.</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Gedung SD</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>1 Unit</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Baik</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Dusun II Kampale</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>6.</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Poskesdes</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>1 Unit</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Baik</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Dusun II Kampale</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>7.</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Posyandu</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>1 Unit 2 Unit</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Baik</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Dusun I Kampale<br />Dusun II Kampale</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>8.</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Kantor Desa</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>1 Unit</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Baik</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Dusun II Kampale</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>9.</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Masjid</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>1 Unit 2 Unit</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Baik</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Dusun I Kampale<br />Dusun II Kampale</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', color: '#4b5563' }}>10.</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Pekuburan</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>3 Unit</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Baik</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Dusun II Kampale</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bidang Usaha */}
        <div style={{ 
          marginBottom: '40px',
          background: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          border: '1px solid #e5e7eb'
        }}>
          <h2 style={{ 
            color: '#047857',
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '24px',
            textAlign: 'left'
          }}>
            Bidang Usaha
          </h2>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '15px',
              lineHeight: '1.6'
            }}>
              <thead>
                <tr>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    NO
                  </th>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    BIDANG USAHA
                  </th>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    JUMLAH
                  </th>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    %
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>1</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Petani</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>1050 Orang</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>36,13</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>2</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Ibu Rumah Tangga</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>756 Orang</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>19,75</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>3</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Pelajar/Mahasiswa</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>272 Orang</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>11,95</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>4</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Pedagang</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>50 Orang</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>2,41</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>5</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Pegawai Swasta</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>10 Orang</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>0,48</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>6</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Pensiunan</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>7 Orang</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>0,34</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>7</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Guru / Dosen</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>17 Orang</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>0,82</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>8</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Industri / Wiraswasta</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>63 Orang</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>3,03</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>9</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>TNI</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>0 Orang</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>0,00</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>10</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Dokter</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>0 Orang</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>0,00</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>11</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Buruh Tani/Buruh Harian Lepas</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>230 Orang</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>10,31</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>12</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Bidan/Tenaga Medis Lain</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>10 Orang</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>0,48</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>13</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Pegawai Negeri</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>10 Orang</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>0,48</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>14</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Belum Kerja/Tidak Kerja</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>234 Orang</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>10,31</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', color: '#4b5563' }}>15</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Lainnya</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>357 Orang</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>7,56</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Jumlah Penduduk 2021-2023 */}
        <div style={{ 
          marginBottom: '40px',
          background: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          border: '1px solid #e5e7eb'
        }}>
          <h2 style={{ 
            color: '#047857',
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '24px',
            textAlign: 'left'
          }}>
            Jumlah Penduduk (2021-2023)
          </h2>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '15px',
              lineHeight: '1.6'
            }}>
              <thead>
                <tr>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    NO
                  </th>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    JENIS KELAMIN
                  </th>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    2021
                  </th>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    2022
                  </th>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    2023
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>1.</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Laki-laki</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>1.415</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>1.455</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>1.505</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', color: '#4b5563' }}>2.</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Perempuan</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>1.437</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>1.492</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>1.541</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Jumlah Penduduk Persen */}
        <div style={{ 
          marginBottom: '40px',
          background: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          border: '1px solid #e5e7eb'
        }}>
          <h2 style={{ 
            color: '#047857',
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '24px',
            textAlign: 'left'
          }}>
            Jumlah Penduduk Berdasarkan Jenis Kelamin
          </h2>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '15px',
              lineHeight: '1.6'
            }}>
              <thead>
                <tr>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    NO
                  </th>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    Jenis Kelamin
                  </th>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    Jumlah
                  </th>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    Persen
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>1</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Laki-laki</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>1.505</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>50,65 %</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>2</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Perempuan</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>1.541</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>49,35 %</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', color: '#4b5563' }} colSpan={2}>Jumlah</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>3.046</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>100 %</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Agama */}
        <div style={{ 
          marginBottom: '40px',
          background: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          border: '1px solid #e5e7eb'
        }}>
          <h2 style={{ 
            color: '#047857',
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '24px',
            textAlign: 'left'
          }}>
            Agama
          </h2>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '15px',
              lineHeight: '1.6'
            }}>
              <thead>
                <tr>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    NO
                  </th>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    AGAMA
                  </th>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    JUMLAH
                  </th>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    Persen (%)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>1</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>ISLAM</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>2.985</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>99,1</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>2</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>HINDU</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>61</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>0,9</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', color: '#4b5563' }} colSpan={2}>Jumlah</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>3.046</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tingkat Pendidikan */}
        <div style={{ 
          background: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          border: '1px solid #e5e7eb'
        }}>
          <h2 style={{ 
            color: '#047857',
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '24px',
            textAlign: 'left'
          }}>
            Tingkat Pendidikan
          </h2>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '15px',
              lineHeight: '1.6'
            }}>
              <thead>
                <tr>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    NO
                  </th>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    JENIS PENDIDIKAN
                  </th>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    JUMLAH
                  </th>
                  <th style={{ 
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white',
                    background: '#047857',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    %
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>1</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Lulusan S-2</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>3</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>0,24 %</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>2</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Lulusan S-1</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>48</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>4,41 %</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>3</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Lulusan D-1 / D-2</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>4</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>0,43 %</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>4</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Lulusan D-3</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>5</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>0,45 %</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>5</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Lulusan SLTA</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>315</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>11,2 %</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>6</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Lulusan SLTP</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>387</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>18,5 %</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>7</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Lulusan SD</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>463</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>29,9 %</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', color: '#4b5563' }}>8</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Belum tamat SD/Sederajat</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>397</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>22,5 %</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', color: '#4b5563' }}>9</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>Tidak sekolah/belum sekolah</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>411</td>
                  <td style={{ padding: '12px', color: '#4b5563' }}>24,2 %</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}