import { configureStore } from "@reduxjs/toolkit";
// import titlesReducer from "../components/titles/titlesSlice";
import { api } from "../components/titles/titlesApi";
import apiReducer from "../components/titles/titlesApi";

const store = configureStore({
  reducer: {
    // titles: titlesReducer,
    api: apiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
