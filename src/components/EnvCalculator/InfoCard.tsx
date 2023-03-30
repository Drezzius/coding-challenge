import React from "react";
import IconCar from "../../resources/IconCar";
import "../../style/infocard.less";

const InfoCard = () => {
  return (
    <div className="infocard">
      <div className="inner">
        <p className="title">
          <IconCar /> Auto
        </p>
        <p className="maintext">2.032 kg</p>
        <p className="subtext">CO2 / Jahr</p>
      </div>
    </div>
  );
};

export default InfoCard;
