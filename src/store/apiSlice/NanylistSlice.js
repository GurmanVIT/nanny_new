

// src/redux/cardsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching data
export const fetchnlistAsync = createAsyncThunk('Nlist/fetchNlist', async () => {
  const token = localStorage.getItem("Token")
  const headers = {"Authorization":token}
  try {
    const response = await axios.get('https://dev-api-nanny.virtualittechnology.com/v1/user/getNanniesByCategory?categoryId=64c7728354d97ae662ab5c60&limit=10&skip=0&address=mohali,punjab&latitude=30.65757&longitude=76.54545&date=2023-08-15&time=05:00 AM&numberOfHours=1',{headers}); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
});

const NlistSlice = createSlice({
  name: 'Nlist',
  initialState: {
    data: null,
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchnlistAsync.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchnlistAsync.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchnlistAsync.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export default NlistSlice.reducer;
