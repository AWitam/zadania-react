import { useEffect, useState } from "react";

export const useGeo = (ref?: any) => {
  const [status, setStatus] = useState<string>();
  const [geoData, setGeoData] = useState<any>({
    longitude: -0.118092,
    latitude: 51.509865,
  });
  const [isListening, setListening] = useState(false);

  const success = (position: any) => {
    setGeoData(position.coords);
  };

  const error = () => {
    setStatus("Wystąpił problem");
    return;
  };

  const toggleListening = () => {
    setListening(!isListening);
    setStatus("Ładowanie...");
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus("Geolokalizacja nie jest wspierana w Twojej przeglądarce");
    } else {
      isListening && navigator.geolocation.getCurrentPosition(success, error);
    }
  }, [isListening]);

  return [geoData, isListening, toggleListening, status];
};
