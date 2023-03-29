import React from "react";
import "../../style/banner.less";

const Banner = () => {
  return (
    <div className="banner">
      <p className="banner--info">Rundum mobil / Preis- und Umweltvergleich</p>
      <h1 className="banner--title">Umweltrechner</h1>
      <p className="banner--subtitle">
        Umwelt und Preisvergleich zwischen VVS und Deinem Auto
      </p>
    </div>
  );
};

export default Banner;
