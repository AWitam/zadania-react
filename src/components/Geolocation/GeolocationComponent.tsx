import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useGeo } from "../../hooks/useGeo";
import "./geolocationComponent.scss";
import { Map } from "./Map";

export const GeolocationComponent = () => {
  const { geoData, isListening, statusMessage, toggleListening } = useGeo();

  return (
    <div className="geo-component">
      <button className="fancy-btn--grey" onClick={toggleListening}>
        {isListening ? "Wyłącz geolokalizacje" : "Włącz geolokalizację"}
      </button>
      <div>{statusMessage}</div>
      {geoData?.latitude && geoData?.longitude && (
        <MapContainer className="map" center={[geoData.latitude, geoData.longitude]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Map geoData={[geoData.latitude, geoData.longitude]} />
          <Marker position={[geoData.latitude, geoData.longitude]}>
            <Popup>
              <div className="pin">
                <span>Obecna lokalizacja:</span>
                <br />
                <span>
                  <b> long: </b> {geoData.longitude} <b>lat:</b>
                  {geoData.latitude}
                </span>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};
