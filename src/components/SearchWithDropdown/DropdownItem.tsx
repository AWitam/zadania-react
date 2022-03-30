import { useEffect, useRef } from "react";
import { ItemDropdown } from "./types";

export const DropdownItem = ({
  dropdownItem,
  boldPhrase,
}: {
  dropdownItem: ItemDropdown;
  boldPhrase: string;
}) => {
  const { name, salePrice, regularPrice } = dropdownItem;
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (spanRef.current) {
      spanRef.current.innerHTML = bolderText(name, boldPhrase);
    }
  }, [boldPhrase, name]);

  return (
    <div className="dropdown-list__item">
      <span id="name" ref={spanRef}></span>

      <div className="prices">
        <span id="regular-price">{`$${regularPrice.toString()}`}</span>
        <span id="sale-price">{`$${salePrice.toString()}`}</span>
      </div>
    </div>
  );
};

function bolderText(text: string, shouldBeBold: string) {
  const regex = new RegExp(`(${shouldBeBold})`, "gi");
  return text.replace(regex, `<strong>${shouldBeBold}</strong>`);
}
