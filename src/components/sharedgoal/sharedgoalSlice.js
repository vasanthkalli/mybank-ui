import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedGoalCategory: 10,
    goalName: '',
    targetAmount: 0
}

export const sharedGoalSlice = createSlice({
    name: 'sharedGoalSlice',
    initialState,
    reducers: {
        setSelectedGoalCategory: (state, action) => {
            state = state.selectedGoalCategory = action.payload
        },

        setGoalName: (state, action) => {
            state = state.goalName = action.payload
        },

        setTargetAmount: (state, action) => {
            state = state.targetAmount = action.payload
        }
    }
})

export const  {setSelectedGoalCategory, setGoalName, setTargetAmount} = sharedGoalSlice.actions;
export default sharedGoalSlice.reducer;