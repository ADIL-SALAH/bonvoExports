import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeTab: 'HOME'
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTab = action.payload.activeTab
        }
    },
});
export const { setActiveTab } = userSlice.actions;
export default userSlice.reducer;