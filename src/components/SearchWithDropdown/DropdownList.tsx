import { DropdownItem } from "./DropdownItem";
import { ItemDropdown } from "./types";

export const DropdownList = ({
  dropdownItems,
  boldPhrase,
}: {
  dropdownItems: ItemDropdown[];
  boldPhrase: string;
}) => {
  return (
    <div className="dropdown-list">
      {dropdownItems.map((item) => (
        <DropdownItem
          key={item.name}
          dropdownItem={item}
          boldPhrase={boldPhrase}
        />
      ))}
    </div>
  );
};
