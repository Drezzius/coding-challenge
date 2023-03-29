import React from "react";

const StopSelect = ({
  startLocation,
  stopLocation,
  setStartLocation,
  setStopLocation,
}) => {
  return (
    <div className="stopselect">
      <div className="stopselect-inner">
        <h1 className="stopselect--title">Wähle Deine Pendelroute </h1>
        <p className="stopselect--info">
          um zu sehen, wie viel CO2 Du mit VVS sparen kannst
        </p>
        <form action="">
          <input
            type="text"
            value={startLocation}
            name=""
            id=""
            onChange={(e) => setStartLocation(e.target.value)}
          />
          <input
            type="text"
            value={stopLocation}
            name=""
            id=""
            onChange={(e) => setStopLocation(e.target.value)}
          />
        </form>

        <button className="stopselect--button">Weiter</button>
      </div>
    </div>
  );
};

export default StopSelect;
