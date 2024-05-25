import { createContext, useState } from "react";

// Create a context with an initial empty array
export const dataSearchContext = createContext();

function DataSearProvider({ children }) {
  const [dataSearch, setDataSearch] = useState({});

  const addDataSearch = (data) => setDataSearch(data);

  return (
    <dataSearchContext.Provider value={{ dataSearch, addDataSearch }}>
      {children}
    </dataSearchContext.Provider>
  );
}

export default DataSearProvider;
