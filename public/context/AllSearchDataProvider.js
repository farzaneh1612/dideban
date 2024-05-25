import { createContext, useState } from "react";

// Create a context with an initial empty array
export const AllSearchDataContext = createContext();

function AllSearchDataProvider({ children }) {
  const [searchData, setSearchData] = useState([]);

  const addAllSearchData = (data) => setSearchData([data]);

  return (
    <AllSearchDataContext.Provider value={{ searchData, addAllSearchData }}>
      {children}
    </AllSearchDataContext.Provider>
  );
}

export default AllSearchDataProvider;
