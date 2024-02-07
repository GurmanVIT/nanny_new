

// src/redux/cardsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, getAllCategoriesApi } from '../../utils/Constants';

// Async thunk for fetching data
export const getAllCategorieslist = createAsyncThunk('getAllCategorieslist', async () => {
  const token = localStorage.getItem("Token")
  console.log("Token ===> ",token)
  const headers = {
    "Authorization": token, "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  }
  try {
    const url = BASE_URL + getAllCategoriesApi
    const response = await axios.get(url, { headers }); 
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
});

const getAllCategoriesSlice = createSlice({
  name: 'getAllCategoriesReducer',
  initialState: {
    data: null,
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategorieslist.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(getAllCategorieslist.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getAllCategorieslist.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export default getAllCategoriesSlice.reducer;
