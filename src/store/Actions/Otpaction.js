import { createSlice } from '@reduxjs/toolkit';

const otpSlice = createSlice({
    name: 'data',
    initialState: {
    },
    reducers: {
        otpnanny: (state, action) => {

        },
    },
});

export const { otpnanny } = otpSlice.actions;
export default otpSlice.reducer;