import { useDispatch, useSelector } from "react-redux";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import { setGoalName, setTargetAmount } from "../sharedgoalSlice";

export default function GoalDetails(){

    const dispatch = useDispatch();

    const goalSelected  = useSelector(state => state.sharedGoalReducer.selectedGoalCategory)

    const [goalName, setGoalNameState] = useState('')

    const [targetAmount, setTargetAmountState] = useState(0)

    const handlegoalName = (e) => {
        setGoalNameState(e.target.value)
        dispatch(setGoalName(goalName))
    }

    const handleTargetAmount = (e) => {
        setTargetAmountState(e.target.value)
        dispatch(setTargetAmount(e.target.value))
    }

    const handlesendingNameToStore = () =>  {
      
    }

    return (
        <div>
            Selected Goal is {goalSelected}
            <Grid container>

                <Grid item>

                    <TextField value={goalName} label='Goal name' onChange={handlegoalName} onBlur={handlesendingNameToStore}></TextField>

                </Grid>

                <Grid item>
                   <TextField value={targetAmount} label='Target Amount' onChange={handleTargetAmount}></TextField>
                </Grid>
            </Grid>
        </div>
    );
}