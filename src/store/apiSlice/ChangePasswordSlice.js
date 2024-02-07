// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, changePassword, updateProfileNanny } from '../../utils/Constants';

export const changePasswordApi = createAsyncThunk('changePasswordApi', async (payload) => {
    const token = localStorage.getItem("Token")
    const headers = {"Authorization":token ,  "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json", }
    try{  const url = BASE_URL+changePassword
        const response = await axios.put(url, payload,{headers});
        return response.data;}
    catch (error) {
        throw error;
      }
  
});

const ChangePasswordSlice = createSlice({
    name: 'changePasswordReducer',
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
            .addCase(changePasswordApi.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(changePasswordApi.fulfilled, (state, action) => {

                state.loading = false;
                state.data = action.payload;
                state.token = action.payload.token;
            })
            .addCase(changePasswordApi.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
export const { clearData } = ChangePasswordSlice.actions
export default ChangePasswordSlice.reducer;