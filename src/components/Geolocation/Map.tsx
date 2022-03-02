import { useMap } from "react-leaflet";
import { useEffect } from "react";

export const Map = ({ geoData }: any) => {
  const map = useMap();
  useEffect(() => {
    map.setView(geoData);
  }, [geoData, map]);
  return null;
};
