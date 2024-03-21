// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const verifyOtp = createAsyncThunk('verifyOtp', async (payload) => {
    console.log("payload ===>", payload)
    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
    };
    const response = await axios.put('https://dev-api-nanny.virtualittechnology.com/v1/common/otpVerifications', payload, config);
    return response.data;
});

const otpSlice = createSlice({
    name: 'otp',
    initialState: {
        data: null,
        isAuthenticated: false,
        loading: false,
        error: null,
    },
    reducers: {
        clearOtpData: (state) => {
            // Reset the data property to an empty array
            state.data = null;
        },
    },
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

export const { clearOtpData } = otpSlice.actions;
export default otpSlice.reducer;
