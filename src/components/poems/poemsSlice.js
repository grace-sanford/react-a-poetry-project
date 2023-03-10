import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * `fetchPoemsAsync` GETS data at our open-source api, courtesy of PoetryDB
 */
export const fetchPoemAsync = createAsyncThunk("poemFetchOne", async () => {
  try {
    const { data } = await axios.get(`https://poetrydb.org/random`);
    console.log("data", data[0]);
    return data[0];
  } catch (error) {
    console.log(error);
  }
});

/**
 * poemsSlice
 */
export const poemsSlice = createSlice({
  name: "poems",
  initialState: [],
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(fetchPoemAsync.fulfilled, (state, { payload }) => payload)
      .addCase(fetchPoemAsync.rejected, (state, action) => {
        return action.error.message;
      });
  },
});

export const selectPoems = (state) => state.poems;

export default poemsSlice.reducer;
