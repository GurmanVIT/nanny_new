

// src/redux/cardsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching data
export const fetchbooknAsync = createAsyncThunk('cards/fetchCards', async (payload) => {
    const token = localStorage.getItem("Token")
    const headers = { "Authorization": token }
    console.log("Header ===>", headers)
    try {
        const response = await axios.post('https://dev-api-nanny.virtualittechnology.com/v1/user/createNannyBooking', payload, { headers }); // Replace with your API endpoint
        return response.data;
    } catch (error) {
        throw error;
    }
});

const booknSlice = createSlice({
    name: 'bookNanny',
    initialState: {
        data: null,
        loading: 'idle',
        error: null,
    },
    reducers: {
        clearBookingData: (state) => {
        // Reset the data property to an empty array
        state.data = [];
    },},
    extraReducers: (builder) => {
        builder
            .addCase(fetchbooknAsync.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchbooknAsync.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchbooknAsync.rejected, (state, action) => {
                state.loading = 'idle';
                state.error = action.error.message;
            });
    },
});
export const { clearBookingData } = booknSlice.actions
export default booknSlice.reducer;
