import React from "react";
import IconBus from "../../resources/IconBus";
import IconCarDist from "../../resources/IconCarDist";
import "../../style/calculator-result.less";

const Distance = ({ auto, bus }: { auto: string; bus: string }) => {
  return (
    <div className="distance">
      <div>
        <IconCarDist />
        <span>{auto}</span>
      </div>
      <div>
        <IconBus />
        <span>{bus}</span>
      </div>
    </div>
  );
};

export default Distance;
