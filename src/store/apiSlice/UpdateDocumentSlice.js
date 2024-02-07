

// src/redux/cardsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, uploadDocumentsApi, } from '../../utils/Constants';

// Async thunk for fetching data
export const uploadDocuments = createAsyncThunk('uploadDocuments', async (payload) => {
  const token = localStorage.getItem("Token")
  const headers = {"Authorization":token,  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json", }
  try {
    console.log("Upload Document Payload ===> ",payload)
    const url = BASE_URL+uploadDocumentsApi
    const response = await axios.post(url,payload,{headers}); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
});

const UploadDocumentsSlice = createSlice({
  name: 'uploadDocumentsReducer',
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
      .addCase(uploadDocuments.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(uploadDocuments.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(uploadDocuments.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export const { clearData } = UploadDocumentsSlice.actions

export default UploadDocumentsSlice.reducer;
