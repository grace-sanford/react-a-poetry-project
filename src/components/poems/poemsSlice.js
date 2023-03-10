import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * `fetchPoemsAsync` GETS data at our open-source api, courtesy of PoetryDB
 */
const fetchPoemAsync = createAsyncThunk("poemsFetchOne",
    async () => {
        try {
            const {data} = await axios.get(`https://poetrydb.org/random`);
            console.log(data)
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

/**
 * poemsSlice
 */
export const poemsSlice = createSlice({
    name: "poems",
    initialState: [],
    reducers: [],
    extraReducers: (builder) => {
        builder
        .addCase(fetchPoemAsync.fulfilled, (state, {payload})=> payload)
        .addCase(fetchPoemAsync.rejected, (state, action) => {
            return action.error.message
        })
    }
})

export const selectPoem = (state) => state.poem;

export default poemsSlice.reducer;