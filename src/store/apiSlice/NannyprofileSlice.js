

// src/redux/NannyproSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, profileNanny } from '../../utils/Constants';

// Async thunk for fetching data
export const getNannyProfile = createAsyncThunk('getNannyProfile', async () => {
  const token = localStorage.getItem("Token")
  const headers = {"Authorization":token,  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json", }
  try {
    const url = BASE_URL+profileNanny
    const response = await axios.get(url,{headers}); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
});

const NannyProfileSlice = createSlice({
  name: 'nannyProfileReducer',
  initialState: {
    data: null,
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNannyProfile.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(getNannyProfile.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getNannyProfile.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export default NannyProfileSlice.reducer;
