import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedGoalCategory: 10
}

export const sharedGoalSlice = createSlice({
    name: 'sharedGoalSlice',
    initialState,
    reducers: {
        setSelectedGoalCategory: (state, action) => {
            state = state.selectedGoalCategory = action.payload
        }
    }
})

export const  {setSelectedGoalCategory} = sharedGoalSlice.actions;
export default sharedGoalSlice.reducer;