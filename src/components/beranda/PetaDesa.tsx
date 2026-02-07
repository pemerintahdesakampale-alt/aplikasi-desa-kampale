'use client';

import { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Icon, Style, Fill, Stroke, Text as OLText } from 'ol/style';
import Overlay from 'ol/Overlay';
import { fromLonLat } from 'ol/proj';
import { Extent, extend } from 'ol/extent';

// === DATA LOKASI DESA (edit sesuka hati) ===
const villageLocations = [
  { id: 1, name: 'Desa Kampale', lon: 119.99643285113163, lat: -3.9118243005139806, info: 'Desa Kampale terletak di wilayah …' },
];

export default function PetaDesa() {
  const mapEl = useRef<HTMLDivElement | null>(null);
  const popupEl = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<Overlay | null>(null);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    if (!mapEl.current) return;

    // Base layer
    const base = new TileLayer({ source: new OSM() });

    // Vector source & features
    const source = new VectorSource();
    const extent: Extent = [Infinity, Infinity, -Infinity, -Infinity];

    // Marker Google Maps style
    const markerStyle = new Style({
      image: new Icon({
        src: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
            <path d="M16 0C7.16 0 0 7.16 0 16c0 4.8 2.1 9.2 5.5 12.3l0.5 0.4 5.5-5.5c0.1-0.1 0.3-0.2 0.5-0.2h1c0.2 0 0.4 0.1 0.5 0.2l5.5 5.5 0.5-0.4c3.4-3.1 5.5-7.5 5.5-12.3C32 7.16 24.84 0 16 0zm0 22c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" 
                  fill="#DB4437" stroke="#fff" stroke-width="1.5"/>
          </svg>
        `),
        anchor: [0.5, 1],
        scale: 1,
        crossOrigin: 'anonymous',
      }),
    });

    villageLocations.forEach((v) => {
      const coord = fromLonLat([v.lon, v.lat]);
      const f = new Feature({
        geometry: new Point(coord),
        name: v.name,
        info: v.info,
      });
      f.setStyle([
        markerStyle,
        new Style({
          text: new OLText({
            text: v.name,
            offsetY: -28,
            font: '12px Arial',
            fill: new Fill({ color: '#111' }),
            stroke: new Stroke({ color: 'white', width: 3 }),
          }),
        }),
      ]);
      source.addFeature(f);
      extend(extent, f.getGeometry()!.getExtent());
    });

    const vector = new VectorLayer({ source });

    // Popup overlay
    const overlay = new Overlay({
      element: popupEl.current!,
      autoPan: { animation: { duration: 200 } },
      offset: [0, -28],
      positioning: 'bottom-center',
      stopEvent: true,
    });
    overlayRef.current = overlay;

    // Map init
    const map = new Map({
      target: mapEl.current,
      layers: [base, vector],
      view: new View({
        center: fromLonLat([villageLocations[0].lon, villageLocations[0].lat]),
        zoom: 15,
      }),
      overlays: [overlay],
    });
    mapRef.current = map;

    // Fit ke semua marker
    if (isFinite(extent[0])) {
      map.getView().fit(extent, { padding: [40, 40, 40, 40], maxZoom: 16, duration: 300 });
    }

    // Klik fitur → popup
    map.on('singleclick', (evt) => {
      overlay.setPosition(undefined);
      map.forEachFeatureAtPixel(evt.pixel, (feature) => {
        const name = feature.get('name');
        const info = feature.get('info');
        if (popupEl.current) {
          popupEl.current.innerHTML = `
            <div style="min-width:180px;max-width:240px">
              <div style="font-weight:bold;margin-bottom:4px">${name ?? ''}</div>
              <div style="font-size:13px;line-height:1.35">${info ?? ''}</div>
            </div>
          `;
        }
        overlay.setPosition(evt.coordinate);
        return true;
      });
    });

    // Cleanup
    return () => {
      map.setTarget(undefined);
      mapRef.current = null;
      overlayRef.current = null;
    };
  }, []);

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

      {/* Container Peta */}
      <div
        ref={mapEl}
        style={{
          width: '100%',
          height: '400px',
          position: 'relative',
        }}
      />

      {/* Popup */}
      <div
        ref={popupEl}
        style={{
          position: 'absolute',
          background: 'white',
          color: '#111',
          borderRadius: '8px',
          boxShadow: '0 6px 18px rgba(0,0,0,0.2)',
          padding: '8px 10px',
          transform: 'translate(-50%, -100%)',
          pointerEvents: 'auto',
        }}
      />
    </div>
  );
}