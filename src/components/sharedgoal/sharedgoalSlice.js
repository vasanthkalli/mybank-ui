import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    goalCategories: [
       {key: 10, value: 'Dream Car' }, { key: 20, value: 'Holiday' }, { key: 30, value: 'Gadgets' }, { key: 40, value: 'New Home' },
            { key: 50, value: 'Celebration' }, { key: 60, value: 'Emergrncy Fund' }
    ],
    selectedGoalCategory: 10,
    selectedGoalCategoryName: 'Dream Car',
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
        setSelectedGoalCategoryName: (state, action) => {
            state = state.selectedGoalCategoryName = action.payload
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

export const { setSelectedGoalCategory, setSelectedGoalCategoryName, setGoalName, setTargetAmount, setProceed, setGoalmembers, setIsMembersAdded, setselectedNumMonths, setinterestRateSelected} = sharedGoalSlice.actions;
export default sharedGoalSlice.reducer;