

// src/redux/cardsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching data
export const fetchUserproAsync = createAsyncThunk('Userpro/fetchUserpro', async () => {
  const token = localStorage.getItem("Token")
  const headers = {"Authorization":token}
  try {
    const response = await axios.get('https://dev-api-nanny.virtualittechnology.com/v1/user/profile',{headers}); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
});

const UserproSlice = createSlice({
  name: 'Userpro',
  initialState: {
    data: null,
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserproAsync.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchUserproAsync.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchUserproAsync.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export default UserproSlice.reducer;

