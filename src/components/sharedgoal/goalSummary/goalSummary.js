import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";

export default function GoalSummary() {

    const goalState = useSelector(state => state.sharedGoalReducer)
    const { selectedGoalCategory,selectedGoalCategoryName, goalName, targetAmount, goalMembers, selectedNumMonths, interestRateSelected } = goalState;

    const [openBackDrop, setOpenBackDrop] = useState(false)

    useEffect(() => {
        console.log('inside goal summary')
        console.log(goalState)
    }, [])

    const submitGoal = async () => {
        setOpenBackDrop(true)
        let requestBody = {
            goal_name: goalName,
            goal_duration: selectedNumMonths,
            goal_amount: targetAmount,
            interest_rate: interestRateSelected,
            users: goalMembers,
            start_date: new Date()
        }
        try {
            let response = await axios.post('https://shared-goal-tinknttuzq-em.a.run.app/goal/addgoal', requestBody)
            console.log(response)
            setOpenBackDrop(false)
        } catch (e) {
            console.error("Error while sending the data")
            setOpenBackDrop(false)
        }

    }

    const handleClose = () => {

    }
    return (
        <div>
            <Grid container justifyContent={'center'} alignItems={'center'} flexDirection={'column'} spacing={2}>
                <Grid item>
                    <p>Goal category is {selectedGoalCategoryName}</p>
                </Grid>
                <Grid item>
                    <p>Goal name {goalName}</p>
                    <p>Target Amount {targetAmount}</p>
                    <p>Number of months {selectedNumMonths}</p>
                    <p>Interest rate selected {interestRateSelected}</p>
                </Grid>
                <Grid item>
                    <p>You shared your Goal with following members</p>
                    <Box sx={{ width: '100%' }} style={{ marginTop: '0px' }}>
                        <table border={1}>
                            <th>Member Name </th> <th>Email </th> <th>Mobiel Number </th>
                            {goalMembers.map(member => {
                                return (
                                    <tr><td>{member.membername}</td><td>{member.email}</td><td>{member.mobilenumber}</td></tr>
                                );
                            })

                            }
                        </table>
                    </Box>
                </Grid>
                <Grid item>
                    <Button onClick={submitGoal} variant="contained">Create Goal</Button>
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={openBackDrop}
                        onClick={handleClose}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </Grid>
            </Grid>
        </div>
    );

}