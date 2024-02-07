

// src/redux/cardsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, UpdateNannyCatgories } from '../../utils/Constants';

// Async thunk for fetching data
export const updateNannyCatgories = createAsyncThunk('updateNannyCatgories', async (payload) => {
  const token = localStorage.getItem("Token")
  const headers = {
    "Authorization": token, "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  }
  try {
    const url = BASE_URL + UpdateNannyCatgories 
    const response = await axios.put(url , payload, { headers }); 
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
});

const updateNannyCatgoriesSlice = createSlice({
  name: 'updateNannyCatgoriesReducer',
  initialState: {
    data: null,
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateNannyCatgories.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(updateNannyCatgories.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(updateNannyCatgories.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export default updateNannyCatgoriesSlice.reducer;
