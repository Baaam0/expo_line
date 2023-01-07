import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

export default function Map() {

    const position = [49.28594, -123.11129];
    const purpleOption = { color: '#00355f' };
    const redOption = { color: 'red'};

    const polyline = [
      [49.28594, -123.11129],
      [49.28556, -123.12021],
      [49.28329, -123.11613],
      [49.27965, -123.10981],
      [49.27317, -123.10038],
      [49.26294, -123.06855],
      [49.24829, -123.05591],
      [49.24427, -123.04611],
      [49.23838, -123.03176],
      [49.22975, -123.01266],
      [49.22580, -123.00388],
      [49.22007, -122.98847],
      [49.21220, -122.95931],
      [49.20003, -122.94911],
      [49.20142, -122.91265], // New West

      [49.20482, -122.90611], // Columbia
      [49.22470, -122.88943], // Sapperton
      [49.23326, -122.88286], // Braid

      [49.25345, -122.91869], // Production Way–University Station

      [49.23326, -122.88286], // Braid
      [49.22470, -122.88943], // Sapperton
      [49.20482, -122.90611], // Columbia

      [49.20444, -122.87403], 
      [49.19898, -122.85066],
      [49.18956, -122.84790],
      [49.18280, -122.84478]
    ]

    const expoLine = [
      'Waterfront Station',
      'Burrard Station',
      'Granville Station',
      'Stadium–Chinatown Station',
      'Main Street–Science World Station',
      'Commercial–Broadway Station',
      'Nanaimo Station',
      '29th Avenue Station',
      'Joyce–Collingwood Station',
      'Patterson Station',
      'Metrotown Station',
      'Royal Oak Station',
      'Edmonds Station',
      '22nd Street Station',
      'New Westminster Station',

      'Columbia Station',
      'Sapperton Station',
      'Braid Station',

      'Production Way–University Station',

      'Braid Station',
      'Sapperton Station',
      'Columbia Station',


      'Scott Road Station',
      'Gateway Station',
      'Surrey Central Station',
      'King George Station'
    ]

    function createArray(stations, coordinates) {
      const array = [];
      for (let i = 0; i < stations.length; i++) {
        array.push([stations[i],coordinates[i]]);
      }
      return array;
    }
    
    const array = createArray(polyline, expoLine);

  return (
    <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {array.map(([station,expoLine]) =>
      <Marker position={station}> 
          <Popup>
            <div style={{textAlign: 'center'}}>
              Expo Line <br/> {expoLine}
            </div>
          </Popup>
      </Marker>
      )}

      {/* <Marker position={position}>
        <Popup>
          Skytrain. <br/> Waterfront.
        </Popup>
      </Marker> */}

      {/* <CircleMarker center={position} pathOptions={redOption} radius={20}>
        <Popup>You reached your destination!</Popup>
      </CircleMarker> */}

      <Polyline pathOptions={purpleOption} positions={polyline}/>
    </MapContainer>
  )
}