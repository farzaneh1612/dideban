import { createContext, useState } from "react";

// Create a context with an initial empty array
export const dataReservationContext = createContext();

function DataReservationProvider({ children }) {
  const [dataReservation, setDataReservation] = useState({});

  const addDataReservation = (data) => setDataReservation(data);

  return (
    <dataReservationContext.Provider
      value={{ dataReservation, addDataReservation }}
    >
      {children}
    </dataReservationContext.Provider>
  );
}

export default DataReservationProvider;
