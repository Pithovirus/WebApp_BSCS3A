import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const LeafletMap = () => {
  useEffect(() => {
    return () => {
      const container = L.DomUtil.get('map');
      if (container != null) {
        container._leaflet_id = null;
      }
    };
  }, []);

  return (
    <MapContainer
      id="map"
      center={[10.713845400205717, 122.56255674358611]}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[10.713845400205717, 122.56255674358611]}>
        <Popup>Iloilo City</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
