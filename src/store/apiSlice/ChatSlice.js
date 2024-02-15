

// src/redux/NannyproSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, chathistoryApi } from '../../utils/Constants';

// Async thunk for fetching data
export const getchathistory = createAsyncThunk('getchathistory', async (payload) => {
    const token = localStorage.getItem("Token")
    const headers = {
        "Authorization": token, "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    }
    try {
        const url = BASE_URL + chathistoryApi + "?type=" + payload
        const response = await axios.get(url, { headers }); // Replace with your API endpoint
        return response.data;
    } catch (error) {
        throw error;
    }
});

const chathistorySlice = createSlice({
    name: 'chathistoryReducer',
    initialState: {
        data: null,
        loading: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getchathistory.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(getchathistory.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.data = action.payload;
                state.error = null;
            })
            .addCase(getchathistory.rejected, (state, action) => {
                state.loading = 'idle';
                state.error = action.error.message;
            });
    },
});

export default chathistorySlice.reducer;
