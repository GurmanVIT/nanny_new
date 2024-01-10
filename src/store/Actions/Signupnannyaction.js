import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
    name: 'data',
    initialState: {
    },
    reducers: {
        signupUser: (state, action) => {

        },
    },
});

export const { signupUser } = signupSlice.actions;
export default signupSlice.reducer;