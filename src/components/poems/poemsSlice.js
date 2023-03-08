// This is where I configure all of my Redux logic for the `poems` slice of my state.

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * fetchPoemsAsync GETS data from an open source API and returns it.
 */

export const fetchPoemsAsync = createAsyncThunk("poems/fetchAll", () => {
  try {
    const { data } = "https://poetrydb.org/poems.json";
    console.log("data", data);
    return data;
  } catch (err) {
    console.log(err);
  }
});

//Here I invoke the createSlice function, and pass it an obj with all of my state details.
export const poemsSlice = createSlice({
  name: "poems",
  initialState: [],
  reducers: (builder) => {
    builder
      .addCase(fetchPoemsAsync.fulfilled, (state, { payload }) => payload)
      .addCase(fetchPoemsAsync.rejected, (state, action) => {
        return action.error;
      });
  },
});

export const selectPoems = (state) => state.poems;

export default poemsSlice.reducer;
