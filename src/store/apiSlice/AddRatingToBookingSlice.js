// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, AddratingbookingApi } from '../../utils/Constants';

export const Addratingbooking = createAsyncThunk('Addratingbooking', async (payload) => {
    const token = localStorage.getItem("Token")
    const headers = {
        "Authorization": token, "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    }
    try {
        const url = BASE_URL + AddratingbookingApi
        const response = await axios.put(url, payload, { headers });
        return response.data;
    }
    catch (error) {
        throw error;
    }

});

const AddratingbookingSlice = createSlice({
    name: 'AddratingbookingReducer',
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
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(Addratingbooking.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(Addratingbooking.fulfilled, (state, action) => {

                state.loading = false;
                state.data = action.payload;
                state.token = action.payload.token;
            })
            .addCase(Addratingbooking.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
export const { clearData } = AddratingbookingSlice.actions
export default AddratingbookingSlice.reducer;