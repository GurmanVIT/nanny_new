// src/redux/cardsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching data
export const fetchCardsAsync = createAsyncThunk(
  "cards/fetchCards",
  async () => {
    const token = localStorage.getItem("Token");
    const headers = {
      Authorization: token,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    try {
      const response = await axios.get(
        "https://dev-api-nanny.virtualittechnology.com/v1/nanny/getAllCategories?skip=0&limit=10&type=0",
        { headers }
      ); // Replace with your API endpoint
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    data: null,
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardsAsync.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchCardsAsync.fulfilled, (state, action) => {
        state.loading = "idle";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchCardsAsync.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message;
      });
  },
});

export default cardsSlice.reducer;
