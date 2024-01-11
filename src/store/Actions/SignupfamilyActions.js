import { createSlice } from '@reduxjs/toolkit';

const FamilySlice = createSlice({
    name: 'data',
    initialState: {
    },
    reducers: {
        FamilyUser: (state, action) => {

        },
    },
});

export const { FamilyUser } = FamilySlice.actions;
export default FamilySlice.reducer;