

// src/redux/cardsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, DocumentsnannyApi } from '../../utils/Constants';

// Async thunk for fetching data
export const DocumentsnannyList = createAsyncThunk('DocumentsnannyList', async () => {
  const token = localStorage.getItem("Token")
  const headers = {"Authorization":token,  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json", }
  try {
    const url = BASE_URL+DocumentsnannyApi
    const response = await axios.get(url,{headers}); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
});

const DocumentsnannySlice = createSlice({
  name: 'DocumentsnannyReducer',
  initialState: {
    data: null,
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(DocumentsnannyList.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(DocumentsnannyList.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(DocumentsnannyList.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export default DocumentsnannySlice.reducer;
