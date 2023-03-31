import React, { useRef, useState } from "react";
import IconPoi from "../../resources/IconPoi";
import IconCurrentLocation from "../../resources/IconCurrentLocation";
import IconStop from "../../resources/IconStop";
import "../../style/locations-dropdown.less";
import IconStart from "../../resources/IconStart";
import IconLocation from "../../resources/IconLocation";
import { Location } from "../../types/types";

interface SelectProps {
  name: string;
  placeHolder: string;
  options: Location[];
  location: string;
  setLocation: (val: string) => void;
  setSelectedLocation: (val: Location) => void;
}

const Select = ({
  name,
  placeHolder,
  options,
  location,
  setLocation,
  setSelectedLocation,
}: SelectProps) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const optionRef = useRef(null);

  const getIconType = (type: string) => {
    switch (type) {
      case "stop":
        return <IconStop />;
      case "start":
        return <IconStart />;
      case "poi":
        return <IconPoi />;
      default:
        return <IconLocation />;
    }
  };

  const selectOptions = (
    <div key={0}>
      <div className="location-option">
        <IconCurrentLocation />
        <div>
          <p className="disassembled-name">Mein standort verwenden</p>
        </div>
      </div>
      {!options
        ? ""
        : options.map((option) => {
            return (
              <div
                className="location-option"
                key={option.id}
                ref={optionRef}
                onClick={() => {
                  setLocation(option.name);
                  setSelectedLocation(option);
                  setShowDropDown(false);
                }}
              >
                {getIconType(option.type)}
                <div>
                  <p className="disassembled-name">{option.disassembledName}</p>
                  <p className="parent-name">{option.parent.name}</p>
                </div>
              </div>
            );
          })}
    </div>
  );

  return (
    <>
      <input
        type="text"
        value={location}
        name={name}
        placeholder={placeHolder}
        onChange={(e) => setLocation(e.target.value)}
        onFocus={() => setShowDropDown(true)}
        onBlur={() => {
          setTimeout(() => {
            setShowDropDown(false);
          }, 200);
        }}
      />
      {showDropDown && (
        <div className="locations-dropdown">{selectOptions}</div>
      )}
    </>
  );
};

export default Select;
