import React from "react";
import Distance from "./Distance";
import "../../style/calculator-result.less";
import InfoCards from "./InfoCards";

interface JourneyElements {
  distance: number;
  legs: any[];
  properties: {
    CO2Emission_Actual_MediumCars: string;
  };
}

type JourneysArr = {
  journeys: JourneyElements[];
};

const CalculatorResult = ({ journeys }: JourneysArr) => {
  const { auto, others } = journeys.reduce(
    (acc, obj) => {
      if (obj.legs[0].transportation?.product?.name === "Auto") {
        acc.auto.push(obj.legs);
      } else {
        acc.others.push(obj.legs);
      }
      return acc;
    },
    { auto: [], others: [] }
  );
  const autoData = auto
    .flatMap((item) => item.flatMap((subItem: any) => subItem))
    .filter(
      (item) => item.properties && item.properties.CO2Emission_Actual_MediumCars
    )
    .map((item) => item.properties.CO2Emission_Actual_MediumCars)[0];

  const pubTransitEmission = others
    .flat()
    .map((item) => item.properties)
    .reduce((accumulator, current) => {
      const emissionKeys = Object.keys(current).filter((key) =>
        key.includes("CO2Emission_Actual_")
      );
      emissionKeys.forEach((key) => {
        accumulator += parseFloat(current[key]);
      });
      return accumulator;
    }, 0);

  const pubTransportSmallestDistance =
    others.length === 0
      ? []
      : others
          .flatMap((route) => route)
          .filter((route) => route.transportation.name !== "Fussweg")
          .reduce((smallest, route) => {
            return smallest.distance < route.distance ? smallest : route;
          });

  return (
    <div className="calculator-result">
      <div>
        <Distance
          auto={`${(auto[0][0].distance / 1000).toFixed(1)} km`}
          bus={`${(pubTransportSmallestDistance.distance / 1000).toFixed(
            1
          )} km`}
        />
      </div>
      <div className="infocards">
        <div>
          {autoData && pubTransitEmission > 0 && (
            <InfoCards
              auto={`${Math.round(autoData.split("-")[0])} kg`}
              bus={`${Math.round(pubTransitEmission)} kg`}
              title="Auswirkungen auf die Umwelt"
              subtext="CO2 / Jahr"
            />
          )}
        </div>
        <div>
          <InfoCards
            title="Kosteneinschätzung für ein Jahr"
            auto="100"
            bus="50"
            subtext="Eur"
          />
        </div>
      </div>
    </div>
  );
};

export default CalculatorResult;
