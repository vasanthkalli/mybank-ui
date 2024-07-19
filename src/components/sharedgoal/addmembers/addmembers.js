import { TextField } from "@mui/material"
import { useState } from "react"
import { useSelector } from "react-redux"
import Button from "@mui/material/Button"
import {Grid} from "@mui/material"
export default function AddMember(){

    const goalCatSelected  = useSelector(state => state.sharedGoalReducer.selectedGoalCategory)
    const goalName  = useSelector(state => state.sharedGoalReducer.goalName)
    const targetAmount  = useSelector(state => state.sharedGoalReducer.targetAmount)

    const [membername, setmembername] = useState('')
    const [email, setemail] = useState('')
    const [mobilenumber, setmobilenumber] = useState()

    const handleNameChange = (e) => {
         setmembername(e.target.value)
    }

    const handleEmailCahnge = (e) => {
        setemail(e.target.value)
   }
   
   const handlePhonenumChange = (e) => {
    setmobilenumber(e.target.value)
}

    return (<div>
        Add member step
        Goal Category is {goalCatSelected}
        Goal name is {goalName}

        goal targetAmount is {targetAmount}

        <Grid container>
            <Grid item>
                <TextField value={membername} onChange = {handleNameChange} label='name' required></TextField>
            </Grid>
            <Grid item>
                <TextField value={email} label='email' onChange={handleEmailCahnge} type="email" required></TextField>
            </Grid>
            <Grid item>
                <TextField value={mobilenumber} label='mobile number' onChange={handlePhonenumChange} required></TextField>
            </Grid>
            <Grid item>
                  <Button varain='outlined'>Add Member</Button>
            </Grid>
        </Grid>
    </div>)
}