import L from 'leaflet'; // Import Leaflet types directly
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import MapContainer, TileLayer, and Marker from react-leaflet
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });

interface MapProps {
  center: [number, number];
  zoom: number;
}

const Map: React.FC<MapProps> = ({ center, zoom }) => {
  const [isClient, setIsClient] = useState(false);
  const [customMarkerIcon, setCustomMarkerIcon] = useState<L.Icon | null>(null); // Use L.Icon type

  useEffect(() => {
    // Set client-side state
    setIsClient(true);

    // Dynamically load Leaflet and create a custom marker
    const loadLeafletIcon = async () => {
      const L = (await import('leaflet')).default;
      const marker = new L.Icon({
        iconUrl: '/images/image.png',  // Path to your custom marker image
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      });
      setCustomMarkerIcon(marker);
    };

    loadLeafletIcon();
  }, []);

  if (!isClient || !customMarkerIcon) {
    return null;  // Return null to avoid SSR issues
  }

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }} className='z-0'>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center} icon={customMarkerIcon} />
    </MapContainer>
  );
};

export default Map;
