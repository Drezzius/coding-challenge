import React from "react";
import IconCar from "../../resources/IconCar";
import VvsLogo from "../../resources/Vvs-logo";
import InfoCard from "./InfoCard";

type InfoCards = {
  auto?: string;
  bus?: string;
  title?: string;
  subtext?: string;
};
const InfoCards = ({ auto = "", bus = "", title = "", subtext }: InfoCards) => {
  return (
    <>
      <span>{title}</span>
      <div className="infocards--details">
        {auto && (
          <InfoCard
            icon={<IconCar />}
            title="Auto"
            co2={auto}
            subtext={subtext}
          />
        )}

        {bus.length > 0 && (
          <InfoCard
            icon={<VvsLogo width="24px" height="24px" />}
            title="VVS Abo"
            co2={bus}
            subtext={subtext}
          />
        )}
      </div>
    </>
  );
};

export default InfoCards;
