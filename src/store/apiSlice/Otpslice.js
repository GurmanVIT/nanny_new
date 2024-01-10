// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    otpData: null,
    token: null,
    loading: false,
    error: null,
};

export const verifyOtp= createAsyncThunk('verifyOtp', async (payload) => {
    console.log(payload)
    const response = await axios.post('https://dev-api-nanny.virtualittechnology.com/v1/common/otpVerifications', payload);

    console.log(response.data)
    return response.data;
});

const authSlice = createSlice({
    name: 'otp',
    initialState:{
        data: null,
        isAuthenticated: false,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(verifyOtp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(verifyOtp.fulfilled, (state, action) => {
                console.log(action.payload)
                state.loading = false;
                state.otpData = action.payload;
            })
            .addCase(verifyOtp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default authSlice.reducer;