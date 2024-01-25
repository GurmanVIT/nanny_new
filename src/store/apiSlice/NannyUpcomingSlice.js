

// src/redux/cardsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, NannyBookingApi } from '../../utils/Constants';

// Async thunk for fetching data
export const NannyupcommingUserList = createAsyncThunk('NannyupcommingUserList', async (payload) => {
  const token = localStorage.getItem("Token")
  const headers = {"Authorization":token,  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json", }
  try {
    const url = BASE_URL+NannyBookingApi+"?type="+payload
    const response = await axios.get(url,{headers}); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
});

const NannyupcommingSlice = createSlice({
  name: 'NannyupcommingReducer',
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
      .addCase(NannyupcommingUserList.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(NannyupcommingUserList.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(NannyupcommingUserList.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export const { clearData } = NannyupcommingSlice.actions

export default NannyupcommingSlice.reducer;
