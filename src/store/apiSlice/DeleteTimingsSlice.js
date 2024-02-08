// src/redux/cardsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, deleteTimingsApi } from "../../utils/Constants";

// Async thunk for fetching data
export const deleteTimingslist = createAsyncThunk(
  "deleteTimingslist",
  async (payload) => {
    const token = localStorage.getItem("Token");
    const headers = {
      Authorization: token,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    try {
      const url = BASE_URL + deleteTimingsApi;
      const response = await axios.put(url, payload, { headers });
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const deleteTimingsSlice = createSlice({
  name: "deleteTimingsReducer",
  initialState: {
    data: null,
    loading: "idle",
    error: null,
  },
  reducers: {
    clearDeleteData: (state) => {
      // Reset the data property to an empty array
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteTimingslist.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(deleteTimingslist.fulfilled, (state, action) => {
        state.loading = "idle";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(deleteTimingslist.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message;
      });
  },
});

export const { clearDeleteData } = deleteTimingsSlice.actions;
export default deleteTimingsSlice.reducer;
