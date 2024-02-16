// src/redux/NannyproSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, chathistoryApi } from "../../utils/Constants";

// Async thunk for fetching data
export const getChatHistory = createAsyncThunk(
  "getChatHistory",
  async (payload) => {
    const token = localStorage.getItem("Token");
    const headers = {
      Authorization: token,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    try {
      const url =
        BASE_URL +
        chathistoryApi +
        `?skip=${payload.skip}&limit=${payload.limit}&bookingId=${payload.id}`;
      const response = await axios.get(url, { headers }); // Replace with your API endpoint
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const chathistorySlice = createSlice({
  name: "chatHistoryReducer",
  initialState: {
    data: null,
    loading: "idle",
    error: null,
  },
  reducers: {
    clearChat: (state) => {
      // Reset the data property to an empty array
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChatHistory.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getChatHistory.fulfilled, (state, action) => {
        state.loading = "idle";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getChatHistory.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message;
      });
  },
});

export const { clearChat } = chathistorySlice.actions;
export default chathistorySlice.reducer;
