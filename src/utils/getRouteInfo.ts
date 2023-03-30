import axios from "axios";

const getRouteInfo = (startId: string, stopId: string) => {
  const routeInfo = axios
    .get(
      `https://efastatic.vvs.de/umweltrechner/XML_TRIP_REQUEST2?
      language=de&locationServerActive=1&command=&usage=&anyObjFilter=&searchLimitMinutes=360&ptOptionsActive=1&illumTra
      nsfer=on&itOptionsActive=1&delMinDistTrips=1&coordListOutputFormat=STRING&convertStopsPTKernel2LocationServer=1&conve
      rtPOIsITKernel2LocationServer=1&outputOptionsActive=1&calcNumberOfTrips=1&itdTime=1600&computeMonomodalTripCar=1&s
      peedFactorCar=100%25&costFactorCar=0%25&distanceFactorCar=10%25&traveltimeFactorCar=90%25&lineRestriction=403&calcul
      ateCO2=1&calculateDistance=1&anyType_origin=&type_origin=any&anyObjFilter_origin=0&place_origin=&anyType_destination=&t
      ype_destination=any&anyObjFilter_destination=0&place_destination=&outputFormat=rapidJSON&includeFares=true&useUT=true&
      name_origin=${startId}&name_destination=${stopId}&itdDate=20230330`
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error(error));
  return routeInfo;
};

export default getRouteInfo;
