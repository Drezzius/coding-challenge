import React, { useState } from "react";
import IconDestination from "../../resources/IconDestination";
import IconStart from "../../resources/IconStart";
import IconSwitch from "../../resources/IconSwitch";
import useSearchLocations from "../../utils/useSearchLocations";
import Select from "./Select";
import { Location } from "../../types/types";

interface StopSelectProps {
  startLocation: string;
  stopLocation: string;
  handleSubmit: (start: Location, stop: Location) => Promise<void>;
  setStartLocation: (val: string) => void;
  setStopLocation: (val: string) => void;
}

const StopSelect = ({
  startLocation,
  stopLocation,
  setStartLocation,
  setStopLocation,
  handleSubmit,
}: StopSelectProps) => {
  const [selectedStart, setSelectedStart] = useState({
    id: "",
    name: "",
    type: null,
    disassembledName: "",
    parent: {
      name: "",
    },
  });
  const [selectedStop, setSelectedStop] = useState({
    id: "",
    name: "",
    type: null,
    disassembledName: "",
    parent: {
      name: "",
    },
  });

  const foundStartLocations = useSearchLocations(startLocation);
  const foundStopLocations = useSearchLocations(stopLocation);

  return (
    <div className="stopselect">
      <div className="stopselect-inner">
        <h1 className="stopselect--title">Wähle Deine Pendelroute </h1>
        <p className="stopselect--info">
          um zu sehen, wie viel CO2 Du mit VVS sparen kannst
        </p>
        <form action="">
          <div className="inputicons">
            <IconStart />
            <div className="line-route"></div>
            <IconDestination />
          </div>
          <div className="inputfields">
            <div className="inputfield--start">
              <Select
                name="startLocation"
                setSelectedLocation={setSelectedStart}
                options={foundStartLocations}
                location={startLocation}
                setLocation={setStartLocation}
                placeHolder="von : Ort, Haltestelle, Adresse, POI"
              />
            </div>
            <div className="inputfield--stop">
              <Select
                name="stopLocation"
                setSelectedLocation={setSelectedStop}
                options={foundStopLocations}
                location={stopLocation}
                setLocation={setStopLocation}
                placeHolder="nach : Ort, Haltestelle, Adresse, POI"
              />
            </div>
          </div>
          <button className="button">
            <IconSwitch />
          </button>
        </form>

        <button
          className="stopselect--button"
          onClick={() => handleSubmit(selectedStart, selectedStop)}
        >
          Weiter
        </button>
      </div>
    </div>
  );
};

export default StopSelect;
