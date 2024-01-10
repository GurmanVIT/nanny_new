import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching data
export const fetchForgotpasdAsync = createAsyncThunk('fetchForgotpasdAsync', async (payload) => {
    const response = await axios.put('https://dev-api-nanny.virtualittechnology.com/v1/common/forgotPassword',payload); // Replace with your API endpoint
    return response.data;
});

const ForgotpasdSlice = createSlice({
  name: 'Forgotpasd',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForgotpasdAsync.pending, (state) => {
        state.loading =  true;
        state.error = null;
      })
      .addCase(fetchForgotpasdAsync.fulfilled, (state, action) => {
        state.loading =  false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchForgotpasdAsync.rejected, (state, action) => {
        state.loading =  false;
        state.error = action.error.message;
      });
  },
});

export default ForgotpasdSlice.reducer;
