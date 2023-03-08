// // This is where I configure all of my Redux logic for the `poems` slice of my state.
// import axios from "axios";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// /**
//  * fetchTitlesAsync GETS data from an open source API and returns it.
//  */

// export const fetchTitlesAsync = createAsyncThunk(
//   "titles/fetchAll",
//   async () => {
//     try {
//       const { data } = await axios.get(`https://poetrydb.org/title`);
//       return data.titles;
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

// //Here I invoke the createSlice function, and pass it an obj with all of my state details.
// export const titlesSlice = createSlice({
//   name: "titles",
//   initialState: [],
//   reducers: [],
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTitlesAsync.fulfilled, (state, { payload }) => {
//         return payload;
//       })
//       .addCase(fetchTitlesAsync.rejected, (state, action) => {
//         return action.error;
//       });
//   },
// });

// export const selectTitles = (state) => state.titles;

// export default titlesSlice.reducer;
