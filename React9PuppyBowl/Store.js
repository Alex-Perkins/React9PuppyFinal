//React Imports
import { configureStore } from "@reduxjs/toolkit";
import { playersApi } from "./src/API/playersApi";
//Component Imports

const store = configureStore({
  reducer: {
    [playersApi.reducerPath]: playersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playersApi.middleware)
});

export default store;