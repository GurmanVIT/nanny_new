

// src/redux/cardsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, NannyBookingApi } from '../../utils/Constants';

// Async thunk for fetching data
export const NannyOngoingUserList = createAsyncThunk('NannyOngoingUserList', async (payload) => {
  const token = localStorage.getItem("Token")
  const headers = {"Authorization":token}
  try {
    const url = BASE_URL+NannyBookingApi+"?type="+payload
    const response = await axios.get(url,{headers}); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
});

const NannyOngoingSlice = createSlice({
  name: 'NannyOngoingReducer',
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
      .addCase(NannyOngoingUserList.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(NannyOngoingUserList.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(NannyOngoingUserList.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export const { clearData } = NannyOngoingSlice.actions

export default NannyOngoingSlice.reducer;
