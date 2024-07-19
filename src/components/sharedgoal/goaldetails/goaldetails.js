import { useSelector } from "react-redux";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";

export default function GoalDetails(){

    const goalSelected  = useSelector(state => state.sharedGoalReducer.selectedGoalCategory)

    const [goalName, setGoalName] = useState('')

    const [targetAmount, setTargetAmount] = useState()

    return (
        <div>
            Selected Goal is {goalSelected}
            <Grid container>

                <Grid item>

                    <TextField value={goalName} label='Goal name'></TextField>

                </Grid>

                <Grid item>
                   <TextField value={targetAmount} label='Target Amount'></TextField>
                </Grid>
            </Grid>
        </div>
    );
}