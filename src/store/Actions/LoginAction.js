import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'data',
    initialState: {
    },
    reducers: {
        loginReducer: (state, action) => {
        },
    },
});

export const { loginReducer } = loginSlice.actions;
export default loginSlice.reducer;