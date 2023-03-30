import axios from "axios";

const getLocations = (searchInput: string) => {
  const locations = axios
    .get(
      `https://efastatic.vvs.de/umweltrechner/XML_STOPFINDER_REQUEST?outputFormat=rapidJSON&SpEncId=0&coordOutputFormat=EPSG:4326&serverInfo=1&suggestApp=vvs&type_sf=any&version=10.2.10.139&name_sf=${searchInput}`
    )
    .then((response) => response.data.locations)
    .catch((error) => console.error(error));
  return locations;
};

export default getLocations;
