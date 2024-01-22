

// src/redux/NannyproSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching data
export const fetchNannyproAsync = createAsyncThunk('Nannypro/fetchNannypro', async () => {
  const token = localStorage.getItem("Token")
  const headers = {"Authorization":token}
  try {
    const response = await axios.get('https://dev-api-nanny.virtualittechnology.com/v1/nanny/profile',{headers}); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
});

const NannyproSlice = createSlice({
  name: 'Nannypro',
  initialState: {
    data: null,
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNannyproAsync.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchNannyproAsync.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchNannyproAsync.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export default NannyproSlice.reducer;
