

// src/redux/NannyproSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL,UserprofileApi } from '../../utils/Constants';

// Async thunk for fetching data
export const getUserprofile = createAsyncThunk('getUserprofile', async () => {
  const token = localStorage.getItem("Token")
  const headers = {"Authorization":token,  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",}
  try {
    const url = BASE_URL+UserprofileApi
    const response = await axios.get(url,{headers}); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
});

const UserProfileSlice = createSlice({
  name: 'UserProfileReducer',
  initialState: {
    data: null,
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserprofile.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(getUserprofile.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getUserprofile.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export default UserProfileSlice.reducer;
