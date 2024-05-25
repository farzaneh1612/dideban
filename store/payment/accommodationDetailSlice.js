import { createThunkFromApi } from "../utils";
import { createSlice } from "@reduxjs/toolkit";
import accommodationDetailApi from "./accommodationDetailApi";

export const getAccommodationDetailSlice = createThunkFromApi(
  "accommodation/getAccommodationDetailSlice",
  accommodationDetailApi.getAccommodationDetailSlice
);

const initialState = {
  loading: false,
  accommodationDetail: null,
};
export const accommodationDetailSlice = createSlice({
  name: "accommodation",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(
      getAccommodationDetailSlice.fulfilled,
      (state, { payload }) => {
        state.accommodationDetail = payload?.data;
      }
    );
  },
});

export default accommodationDetailSlice.reducer;
