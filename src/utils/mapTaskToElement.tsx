import { GeolocationComponent } from "../components/Geolocation/GeolocationComponent";
import { SearchWithDropdown } from "../components/SearchWithDropdown/SearchWithDropdown";
import { ShopContainer } from "../components/Shop/CartContainer";

export const mapTaskToElement = (task: string): JSX.Element => {
  switch (task) {
    case "use-geo":
      return <GeolocationComponent />;
    case "search-with-dropdown":
      return <SearchWithDropdown />;
    case "context-as-redux":
      return <ShopContainer />;

    default:
      return <div>not implemented</div>;
  }
};
