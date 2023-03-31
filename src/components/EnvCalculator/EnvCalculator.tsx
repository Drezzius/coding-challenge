import React, { useState } from "react";
import Slider from "./Slider";
import StopSelect from "./StopSelect";
import "../../style/envcalculator.less";
import getRouteInfo from "../../utils/getRouteInfo";
import CalculatorResult from "./CalculatorResult";
import { Location } from "../../types/types";

const EnvCalculator = () => {
  const [startLocation, setStartLocation] = useState("");
  const [stopLocation, setStopLocation] = useState("");
  const [journeys, setJourneys] = useState([]);

  const handleSubmit = async (start: Location, stop: Location) => {
    const foundJourneys = await getRouteInfo(start.id, stop.id);
    setJourneys(foundJourneys);
  };

  return (
    <div className="envcalculator">
      {journeys.length === 0 ? (
        <>
          <Slider />
          <StopSelect
            startLocation={startLocation}
            stopLocation={stopLocation}
            setStartLocation={setStartLocation}
            setStopLocation={setStopLocation}
            handleSubmit={handleSubmit}
          />
        </>
      ) : (
        <CalculatorResult journeys={journeys} />
      )}
    </div>
  );
};

export default EnvCalculator;
