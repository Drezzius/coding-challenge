import React from "react";
import "../../style/infocard.less";

interface Infocard {
  co2?: string;
  icon?: React.ReactNode;
  title?: string;
  subtext?: string;
}

const InfoCard = ({ co2, icon, title, subtext }: Infocard) => {
  return (
    <div className="infocard">
      <div className="inner">
        <p className="title">
          {icon} {title}
        </p>
        <p className="maintext">{co2}</p>
        <p className="subtext">{subtext}</p>
      </div>
    </div>
  );
};

export default InfoCard;
