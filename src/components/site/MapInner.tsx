import { MapContainer, TileLayer, Marker, Popup, Polyline, LayerGroup, LayersControl, CircleMarker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Use CDN URLs for default marker icons (avoids bundler asset resolution issues)
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});


type Point = { name: string; uf: string; coords: [number, number]; note: string };

// BR-230 trajeto aproximado (oeste → leste)
const route: [number, number][] = [
  [-7.2583, -64.7975], // Lábrea/AM
  [-7.5083, -63.0211], // Humaitá/AM
  [-7.1907, -59.8967], // Apuí/AM
  [-6.2222, -57.7522], // Jacareacanga/PA
  [-4.2761, -55.9836], // Itaituba/PA
  [-4.0917, -54.9156], // Rurópolis/PA
  [-3.2039, -52.2089], // Altamira/PA
  [-3.4731, -51.2003], // Anapu/PA
  [-3.8369, -50.6378], // Pacajá/PA
  [-5.369, -49.1175],  // Marabá/PA
  [-6.5572, -47.4567], // Estreito/MA
  [-5.5267, -47.4914], // Imperatriz/MA
  [-7.0775, -41.4669], // Picos/PI
  [-8.1392, -41.1414], // Paulistana/PI
  [-7.1195, -34.845],  // João Pessoa/PB
];

const chokepoints: Point[] = [
  { name: "Trecho Lábrea–Humaitá", uf: "AM", coords: [-7.38, -63.9], note: "Trecho não pavimentado, intransitável no inverno amazônico." },
  { name: "Apuí — Jacareacanga", uf: "AM/PA", coords: [-6.7, -58.8], note: "Atoleiros recorrentes; interdições por chuvas." },
  { name: "Rurópolis — Itaituba", uf: "PA", coords: [-4.18, -55.45], note: "Gargalo de escoamento da soja em direção ao porto de Miritituba." },
];

const productionHubs: Point[] = [
  { name: "Altamira", uf: "PA", coords: [-3.2039, -52.2089], note: "Pecuária, cacau e grãos em expansão." },
  { name: "Marabá", uf: "PA", coords: [-5.369, -49.1175], note: "Polo siderúrgico e pecuário do sudeste paraense." },
  { name: "Itaituba", uf: "PA", coords: [-4.2761, -55.9836], note: "Logística de grãos para Miritituba (Tapajós)." },
  { name: "Imperatriz", uf: "MA", coords: [-5.5267, -47.4914], note: "Entroncamento BR-230 × Belém–Brasília (BR-010)." },
];

const ports: Point[] = [
  { name: "Porto de Miritituba", uf: "PA", coords: [-4.2833, -55.9333], note: "Terminal hidroviário do Tapajós — exporta soja via Arco Norte." },
  { name: "Porto de Vila do Conde (Barcarena)", uf: "PA", coords: [-1.5417, -48.7494], note: "Saída atlântica do Arco Norte." },
  { name: "Porto de Santarém", uf: "PA", coords: [-2.4431, -54.7083], note: "Terminal graneleiro na foz do Tapajós." },
];

// Polígonos simplificados das regiões mais afetadas
const regions: { name: string; color: string; bounds: [number, number][] }[] = [
  {
    name: "Sul do Amazonas (Humaitá–Apuí)",
    color: "#b8860b",
    bounds: [
      [-6.6, -64.9], [-6.6, -59.5], [-8.2, -59.5], [-8.2, -64.9],
    ],
  },
  {
    name: "Oeste do Pará (Itaituba–Altamira)",
    color: "#2f6b3a",
    bounds: [
      [-2.8, -56.3], [-2.8, -51.8], [-5.0, -51.8], [-5.0, -56.3],
    ],
  },
  {
    name: "Sudeste Paraense (Marabá)",
    color: "#5b8a3a",
    bounds: [
      [-4.6, -50.0], [-4.6, -48.2], [-6.4, -48.2], [-6.4, -50.0],
    ],
  },
];

export default function MapInner() {
  return (
    <MapContainer
      center={[-5.5, -54]}
      zoom={5}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
      className="rounded-xl"
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Relevo (claro)">
          <TileLayer
            attribution='&copy; OpenStreetMap, &copy; CARTO'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="OpenStreetMap">
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>

        <LayersControl.Overlay checked name="Traçado BR-230">
          <Polyline positions={route} pathOptions={{ color: "#2f6b3a", weight: 4, opacity: 0.9 }} />
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Gargalos logísticos">
          <LayerGroup>
            {chokepoints.map((p) => (
              <CircleMarker
                key={p.name}
                center={p.coords}
                radius={9}
                pathOptions={{ color: "#b91c1c", fillColor: "#dc2626", fillOpacity: 0.85 }}
              >
                <Tooltip direction="top">{p.name}</Tooltip>
                <Popup>
                  <strong>{p.name} ({p.uf})</strong>
                  <br />
                  {p.note}
                </Popup>
              </CircleMarker>
            ))}
          </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Polos agropecuários">
          <LayerGroup>
            {productionHubs.map((p) => (
              <CircleMarker
                key={p.name}
                center={p.coords}
                radius={8}
                pathOptions={{ color: "#a16207", fillColor: "#eab308", fillOpacity: 0.9 }}
              >
                <Tooltip direction="top">{p.name}</Tooltip>
                <Popup>
                  <strong>{p.name} ({p.uf})</strong>
                  <br />
                  {p.note}
                </Popup>
              </CircleMarker>
            ))}
          </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Portos / Arco Norte">
          <LayerGroup>
            {ports.map((p) => (
              <Marker key={p.name} position={p.coords}>
                <Popup>
                  <strong>{p.name} ({p.uf})</strong>
                  <br />
                  {p.note}
                </Popup>
              </Marker>
            ))}
          </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Regiões mais afetadas">
          <LayerGroup>
            {regions.map((r) => (
              <Polyline
                key={r.name}
                positions={[...r.bounds, r.bounds[0]]}
                pathOptions={{ color: r.color, weight: 2, dashArray: "6 6", fillColor: r.color, fillOpacity: 0.12 }}
              >
                <Tooltip sticky>{r.name}</Tooltip>
              </Polyline>
            ))}
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
}
