

// src/redux/cardsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching data
export const fetchEarnAsync = createAsyncThunk('Earn/fetchEarn', async () => {
  const token = localStorage.getItem("Token")
  const headers = {"Authorization":token}
  console.log("Header ===>",headers)
  try {
    const response = await axios.get('https://dev-api-nanny.virtualittechnology.com/v1/nanny/getEarnings',{headers}); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
});

const EarnSlice = createSlice({
  name: 'Earning',
  initialState: {
    data: null,
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEarnAsync.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchEarnAsync.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchEarnAsync.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export default EarnSlice.reducer;
