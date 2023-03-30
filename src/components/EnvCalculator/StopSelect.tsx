import React, { useState } from "react";
import IconDestination from "../../resources/IconDestination";
import IconStart from "../../resources/IconStart";
import IconSwitch from "../../resources/IconSwitch";
import Select from "./Select";

type Location = {
  id: string;
  name: string;
  type: "stop" | "start" | "poi" | "suburb" | null;
  disassembledName: string;
  parent: {
    name: string;
  };
};
interface StopSelectProps {
  startLocation: string;
  foundStartLocations: Location[];
  foundStopLocations: Location[];
  stopLocation: string;
  handleSubmit: (start: Location, stop: Location) => Promise<void>;
  setStartLocation: (val: string) => void;
  setStopLocation: (val: string) => void;
}

const StopSelect = ({
  startLocation,
  foundStartLocations = [],
  foundStopLocations = [],
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
                selectedLocation={selectedStart}
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
                selectedLocation={selectedStop}
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
