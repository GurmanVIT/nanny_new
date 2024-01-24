

// src/redux/cardsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, OngoingUserApi } from '../../utils/Constants';

// Async thunk for fetching data
export const ongoingUserList = createAsyncThunk('ongoingUserList', async () => {
  const token = localStorage.getItem("Token")
  const headers = {"Authorization":token}
  try {
    const url = BASE_URL+OngoingUserApi
    const response = await axios.get(url,{headers}); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
});

const OngoingSlice = createSlice({
  name: 'ongoingReducer',
  initialState: {
    data: null,
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ongoingUserList.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(ongoingUserList.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(ongoingUserList.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export default OngoingSlice.reducer;
