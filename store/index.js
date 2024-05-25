import { configureStore } from "@reduxjs/toolkit";
import accommodationDetail from "./payment/accommodationDetailSlice";

export const store = configureStore({
  reducer: { accommodationDetail },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
