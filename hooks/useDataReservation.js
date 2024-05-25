import { useContext } from "react";
import { dataReservationContext } from "../context/DataReservationProvider";

export const useDataReservation = () => {
  return useContext(dataReservationContext);
};
