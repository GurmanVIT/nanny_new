

// src/redux/cardsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, upcommingUserApi } from '../../utils/Constants';

// Async thunk for fetching data
export const upcommingUserList = createAsyncThunk('upcommingUserList', async (payload) => {
  const token = localStorage.getItem("Token")
  const headers = {"Authorization":token ,  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json", }
  try {
    const url = BASE_URL+upcommingUserApi+"?type="+payload
    const response = await axios.get(url,{headers}); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
});

const upcommingSlice = createSlice({
  name: 'upcommingReducer',
  initialState: {
    data: null,
    loading: 'idle',
    error: null,
  },
  reducers: {
    clearData: (state) => {
        // Reset the data property to an empty array
        state.data = null;
    },
},
  extraReducers: (builder) => {
    builder
      .addCase(upcommingUserList.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(upcommingUserList.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(upcommingUserList.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export const { clearData } = upcommingSlice.actions

export default upcommingSlice.reducer;
