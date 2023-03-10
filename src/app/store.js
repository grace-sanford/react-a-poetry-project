import { configureStore } from "@reduxjs/toolkit";
import { api } from "../components/titles/titlesApi";
import apiReducer from "../components/titles/titlesApi";
import poemsReducer from "../components/poems/poemsSlice"

const store = configureStore({
  reducer: {
    api: apiReducer,
    poems: poemsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
