import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useGeo } from "../../hooks/useGeo";
import "./geolocationComponent.css";
import { Map } from "./Map";

export const GeolocationComponent = () => {
  const [geoData, isListening, toggleListening, status] = useGeo();

  return (
    <>
      <button onClick={toggleListening}>
        {isListening ? "Wyłącz geolokalizacje" : "Włącz geolokalizację"}
      </button>
      <div>
        <MapContainer
          id="map"
          center={[geoData.latitude, geoData.longitude]}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Map geoData={[geoData.latitude, geoData.longitude]} />
          <Marker position={[geoData.latitude, geoData.longitude]}>
            <Popup>Your location 😊</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};
