// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const signupUser = createAsyncThunk("signupUser", async (payload) => {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(
    "https://dev-api-nanny.virtualittechnology.com/v1/common/signUp",
    payload,
    config
  );
  return response.data;
});

const authSlice = createSlice({
  name: "signUp",
  initialState: {
    data: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    clearSignupData: (state) => {
      // Reset the data property to an empty array
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.token = action.payload.token;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearSignupData } = authSlice.actions;
export default authSlice.reducer;
