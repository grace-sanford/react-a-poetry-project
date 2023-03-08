import { configureStore } from "@reduxjs/toolkit";
import { api } from "../components/titles/titlesApi";
import apiReducer from "../components/titles/titlesApi";

const store = configureStore({
  reducer: {
    api: apiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
