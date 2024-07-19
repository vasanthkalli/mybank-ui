import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../components/login/loginSlice'
import sharedGoalReducer from '../components/sharedgoal/sharedgoalSlice'

export const store = configureStore({
    reducer:{
        loginReducer : loginReducer,
        sharedGoalReducer: sharedGoalReducer

    }
})