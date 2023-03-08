import { configureStore } from "@reduxjs/toolkit";
import titlesReducer from "../components/titles/titlesSlice";

const store = configureStore({
    reducer: {
        titles: titlesReducer,
    },
  });

  export default store;