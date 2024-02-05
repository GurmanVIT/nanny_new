

// src/redux/cardsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, gettimingApi } from '../../utils/Constants';

// Async thunk for fetching data
export const getTiminglist = createAsyncThunk('getTiminglist', async () => {
  const token = localStorage.getItem("Token")
  console.log("Token ===> ",token)
  const headers = {
    "Authorization": token, "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  }
  try {
    const url = BASE_URL + gettimingApi
    const response = await axios.get(url, { headers }); 
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
});

const getTiminglistSlice = createSlice({
  name: 'getTiminglistReducer',
  initialState: {
    data: null,
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTiminglist.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(getTiminglist.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getTiminglist.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export default getTiminglistSlice.reducer;
