import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedGoalCategory: 10,
    goalName: '',
    targetAmount: 0,
    proceed: false,
    selectedNumMonths: 12,
    interestRateSelected: 7,
    goalMembers: [],
    IsmemberAdded: false
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
        },
        setProceed: (state, action) => {
            state = state.proceed = action.payload
        },
        setGoalmembers: (state, action) => {
            state = state.goalMembers = action.payload
        },
        setIsMembersAdded: (state, action) => {
            state = state.IsmemberAdded = action.payload
        },
        setselectedNumMonths: (state, action) => {
            state = state.selectedNumMonths = action.payload
        },
        setinterestRateSelected: (state, action) => {
            state = state.interestRateSelected = action.payload
        }
    }
})

export const { setSelectedGoalCategory, setGoalName, setTargetAmount, setProceed, setGoalmembers, setIsMembersAdded, setselectedNumMonths, setinterestRateSelected} = sharedGoalSlice.actions;
export default sharedGoalSlice.reducer;