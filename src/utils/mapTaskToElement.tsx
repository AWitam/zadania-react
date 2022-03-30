import { GeolocationComponent } from "../components/Geolocation/GeolocationComponent";
import { SearchWithDropdown } from "../components/SearchWithDropdown/SearchWithDropdown";

export const mapTaskToElement = (task: string): JSX.Element => {
  switch (task) {
    case "use-geo":
      return <GeolocationComponent />;
    case "search-with-dropdown":
      return <SearchWithDropdown />;

    default:
      return <div>not implemented</div>;
  }
};
