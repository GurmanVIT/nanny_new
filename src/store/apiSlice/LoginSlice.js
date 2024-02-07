// authSlice.js
import { faL } from "@fortawesome/free-solid-svg-icons";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("loginUser", async (payload) => {
  const response = await axios.post(
    "https://dev-api-nanny.virtualittechnology.com/v1/common/login",
    payload
  );
  return response.data;
});

const loginSlice = createSlice({
  name: "login",
  initialState: {
    data: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    clearData: (state) => {
      // Reset the data property to an empty array
      state.data = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { clearData } = loginSlice.actions;
export default loginSlice.reducer;
