import { useEffect, useState } from "react";
import { Location } from "../types/types";
import getLocations from "./getLocations";

const useSearchLocations = (location: string) => {
  const [foundLocations, setFoundLocations] = useState();
  useEffect(() => {
    getLocations(location)
      .then((locations) =>
        setFoundLocations(
          locations.sort(
            (a: Location, b: Location) => b.matchQuality - a.matchQuality
          )
        )
      )
      .catch((error) => console.error(error));
  }, [location]);
  return foundLocations;
};

export default useSearchLocations;
