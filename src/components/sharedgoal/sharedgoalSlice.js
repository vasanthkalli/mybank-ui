import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    goalCategories: [
       {key: 10, value: 'Dream Car' }, { key: 20, value: 'Holiday' }, { key: 30, value: 'Gadgets' }, { key: 40, value: 'New Home' },
            { key: 50, value: 'Celebration' }, { key: 60, value: 'Emergrncy Fund' }
    ],
    selectedGoalCategory: 10,
    selectedGoalCategoryName: 'Dream Car',
    goalName: '',
    goalId: '',
    targetAmount: 0,
    proceed: false,
    selectedNumMonths: 12,
    interestRateSelected: 7,
    goalMembers: [],
    IsmemberAdded: false
}

export const saveGoal = createAsyncThunk('users/saveGoal',
    async(goal, headers) =>{
        const response = await axios.post('https://goal-share-ganutbppla-uc.a.run.app/user/addUser',goal, headers)
        return response.data
    }

)
export const sharedGoalSlice = createSlice({
    name: 'sharedGoalSlice',
    initialState,
    reducers: {
        setSelectedGoalCategory: (state, action) => {
            state.selectedGoalCategory = action.payload
         
        },
        setSelectedGoalCategoryName: (state, action) => {
            let tempGoal =  initialState.goalCategories.filter(goal => goal.key == action.payload)
            console.log('tempgoal', tempGoal)
            state.selectedGoalCategoryName  = tempGoal.value
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
    },
    extraReducers: (builder) => {
        builder.addCase(saveGoal.fulfilled, (state, action)=>{
            const {goal} = action.payload
            console.log(goal)
            state.goalId=goal.goal_id
        })
    }
})

export const { setSelectedGoalCategory, setSelectedGoalCategoryName, setGoalName, setTargetAmount, setProceed, setGoalmembers, setIsMembersAdded, setselectedNumMonths, setinterestRateSelected,setgoalId} = sharedGoalSlice.actions;
export default sharedGoalSlice.reducer;