import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { userAccountSlice } from "./slices/userAccountSlice";
import { readDataSlice } from "./slices/readDataSlice";

export const store = configureStore({
  reducer: {
    [userAccountSlice.name]: userAccountSlice.reducer,
    [readDataSlice.name]: readDataSlice.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
