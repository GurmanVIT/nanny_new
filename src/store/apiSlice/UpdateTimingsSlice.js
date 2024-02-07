

// src/redux/cardsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, updateTimingsApi } from '../../utils/Constants';

// Async thunk for fetching data
export const updateTimingslist = createAsyncThunk('updateTimingslist', async (payload) => {
  const token = localStorage.getItem("Token")
  const headers = {
    "Authorization": token, "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  }
  try {
    const url = BASE_URL + updateTimingsApi 
    const response = await axios.put(url , payload, { headers }); 
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
});

const updateTimingslistSlice = createSlice({
  name: 'updateTimingslistReducer',
  initialState: {
    data: null,
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateTimingslist.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(updateTimingslist.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(updateTimingslist.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export default updateTimingslistSlice.reducer;
