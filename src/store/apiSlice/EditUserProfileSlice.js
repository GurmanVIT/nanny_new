// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, UserEditProfileApi } from '../../utils/Constants';

export const UserEditprofile = createAsyncThunk('UserEditprofile', async (payload) => {
    const token = localStorage.getItem("Token")
    const headers = {"Authorization":token}
    try{  const url = BASE_URL+UserEditProfileApi
        const response = await axios.put(url, payload,{headers});
        return response.data;}
    catch (error) {
        throw error;
      }
  
});

const UserEditprofileSlice = createSlice({
    name: 'UserEditprofileReducer',
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
            .addCase(UserEditprofile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(UserEditprofile.fulfilled, (state, action) => {

                state.loading = false;
                state.data = action.payload;
                state.token = action.payload.token;
            })
            .addCase(UserEditprofile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
export const { clearData } = UserEditprofileSlice.actions
export default UserEditprofileSlice.reducer;