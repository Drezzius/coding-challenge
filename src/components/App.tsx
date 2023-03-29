import React, { useEffect, useState } from "react";
import getLocations from "../utils/getLocations";
import Banner from "./EnvCalculator/Banner";
import EnvCalculator from "./EnvCalculator/EnvCalculator";
import Header from "./Header/Header";

const App = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    getLocations("stuttgart")
      .then((locations) => setLocations(locations))
      .catch((error) => console.error(error));
  }, []);

  console.log(locations);
  return (
    <>
      <Header />
      <Banner />
      <EnvCalculator />
    </>
  );
};

export default App;
