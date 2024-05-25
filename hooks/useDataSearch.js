import { useContext } from "react";
import { dataSearchContext } from "../context/DataSearProvider";

export const useDataSearch = () => {
  return useContext(dataSearchContext);
};
