import { createSlice } from '@reduxjs/toolkit';

const ForgotpasdSlice = createSlice({
    name: 'data',
    initialState: {
    },
    reducers: {
        ForgotpasdUser: (state, action) => {

        },
    },
});

export const { ForgotpasdUser } = ForgotpasdSlice.actions;
export default ForgotpasdSlice.reducer;