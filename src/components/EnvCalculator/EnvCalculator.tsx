import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import StopSelect from "./StopSelect";
import "../../style/envcalculator.less";
import getLocations from "../../utils/getLocations";

const EnvCalculator = () => {
  const [startLocation, setStartLocation] = useState("");
  const [stopLocation, setStopLocation] = useState("");
  const [foundStartLocations, setFoundStartLocations] = useState();
  const [foundStopLocations, setFoundStopLocations] = useState();
  console.log(foundStartLocations);

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

  return (
    <div className="envcalculator">
      <Slider />
      <StopSelect
        startLocation={startLocation}
        stopLocation={stopLocation}
        setStartLocation={setStartLocation}
        setStopLocation={setStopLocation}
      />
    </div>
  );
};

export default EnvCalculator;
