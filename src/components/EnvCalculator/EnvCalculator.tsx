import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import StopSelect from "./StopSelect";
import "../../style/envcalculator.less";
import getLocations from "../../utils/getLocations";
import getRouteInfo from "../../utils/getRouteInfo";
import CalculatorResult from "./CalculatorResult";

// TODO: Move out types from all components, fix getRouteInfo query
type Location = {
  id: string;
  name: string;
  type: "stop" | "start" | "poi" | "suburb" | null;
  disassembledName: string;
  parent: {
    name: string;
  };
};

const EnvCalculator = () => {
  const [startLocation, setStartLocation] = useState("");
  const [stopLocation, setStopLocation] = useState("");
  const [foundStartLocations, setFoundStartLocations] = useState();
  const [foundStopLocations, setFoundStopLocations] = useState();

  useEffect(() => {
    getLocations(startLocation)
      .then((locations) => setFoundStartLocations(locations))
      .catch((error) => console.error(error));
  }, [startLocation]);

  useEffect(() => {
    getLocations(stopLocation)
      .then((locations) => setFoundStopLocations(locations))
      .catch((error) => console.error(error));
  }, [stopLocation]);

  const handleSubmit = async (start: Location, stop: Location) => {
    getRouteInfo(start.id, stop.id);
  };

  return (
    <div className="envcalculator">
      <Slider />
      <StopSelect
        startLocation={startLocation}
        foundStartLocations={foundStartLocations}
        foundStopLocations={foundStopLocations}
        stopLocation={stopLocation}
        setStartLocation={setStartLocation}
        setStopLocation={setStopLocation}
        handleSubmit={handleSubmit}
      />
      <CalculatorResult />
    </div>
  );
};

export default EnvCalculator;
