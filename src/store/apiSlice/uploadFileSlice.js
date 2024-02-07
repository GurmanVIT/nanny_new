

// src/redux/NannyproSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, uploadFileApi } from '../../utils/Constants';

// Async thunk for fetching data
export const uploadFile = createAsyncThunk('uploadFile', async (image) => {
  const token = localStorage.getItem("Token")
 
  const headers = {  "Access-Control-Allow-Origin": "*",
  "Content-Type": "multipart/form-data",}
  const formData = new FormData();
    formData.append('myfile', image);
   
  try {
    const url = BASE_URL+uploadFileApi

    const response = await axios.post(url,formData,{headers}); // Replace with your API endpoint

    return response.data;
  } catch (error) {
    console.log("Upload Image Error ===> ",error.message)
    throw error;
  }
});

const uploadFileSlice = createSlice({
  name: 'uploadFileReducer',
  initialState: {
    data: null,
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadFile.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(uploadFile.rejected, (state, action) => {
        console.log("Upload Image Error ===> ",action.payload)
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export default uploadFileSlice.reducer;
