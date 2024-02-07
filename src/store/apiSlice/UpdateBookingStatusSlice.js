

// src/redux/cardsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, updateBookingStatusApi } from '../../utils/Constants';

// Async thunk for fetching data
export const UpdateBookingStatus = createAsyncThunk('UpdateBookingStatus', async (payload) => {
  const token = localStorage.getItem("Token")
  const headers = {"Authorization":token ,  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json", }
  try {
    const url = BASE_URL+updateBookingStatusApi
    const response = await axios.put(url,payload,{headers}); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
});

const UpdateBookingStatusSlice = createSlice({
  name: 'UpdateBookingStatusReducer',
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
      .addCase(UpdateBookingStatus.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(UpdateBookingStatus.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(UpdateBookingStatus.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export const { clearData } = UpdateBookingStatusSlice.actions

export default UpdateBookingStatusSlice.reducer;
