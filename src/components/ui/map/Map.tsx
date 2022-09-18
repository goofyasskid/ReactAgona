import { FC, PropsWithChildren } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";

const Map: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <div>
      <MapContainer
        center={[55.7887, 49.1221]}
        zoom={15}
        zoomControl={false}
        style={{
          height: "calc(100vh - 135px)",
          width: "100%",
          display: "flex",
        }}
      >
        <div>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[55.7887, 49.1221]}>
            <Popup>EcoRUs</Popup>
          </Marker>
        </div>
        <div>{children}</div>
        <ZoomControl />
      </MapContainer>
    </div>
  );
};

export default Map;
