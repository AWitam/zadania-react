import { GeolocationComponent } from "../components/Geolocation/GeolocationComponent";

export const mapTaskToElement = (task: string): JSX.Element => {
  console.log(task);
  switch (task) {
    case "use-geo":
      return <GeolocationComponent />;

    default:
      return <div>not implemented</div>;
  }
};
