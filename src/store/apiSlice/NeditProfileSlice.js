// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, updateProfileNanny } from '../../utils/Constants';

export const NannyEditprofile = createAsyncThunk('NannyEditprofile', async (payload) => {
    const token = localStorage.getItem("Token")
    const headers = {"Authorization":token}
    try{  const url = BASE_URL+updateProfileNanny
        const response = await axios.put(url, payload,{headers});
        return response.data;}
    catch (error) {
        throw error;
      }
  
});

const NannyEditprofileSlice = createSlice({
    name: 'NannyEditprofileReducer',
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
            .addCase(NannyEditprofile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(NannyEditprofile.fulfilled, (state, action) => {

                state.loading = false;
                state.data = action.payload;
                state.token = action.payload.token;
            })
            .addCase(NannyEditprofile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
export const { clearData } = NannyEditprofileSlice.actions
export default NannyEditprofileSlice.reducer;