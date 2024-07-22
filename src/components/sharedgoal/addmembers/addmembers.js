import { TextField } from "@mui/material"
import { useState } from "react"
import { useSelector } from "react-redux"
import Button from "@mui/material/Button"
import { Grid, Box } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
export default function AddMember() {

    const goalCatSelected = useSelector(state => state.sharedGoalReducer.selectedGoalCategory)
    const goalName = useSelector(state => state.sharedGoalReducer.goalName)
    const targetAmount = useSelector(state => state.sharedGoalReducer.targetAmount)

    const [membername, setmembername] = useState('')
    const [email, setemail] = useState('')
    const [mobilenumber, setmobilenumber] = useState()
    const [members, setmembers] = useState([])

    const handleNameChange = (e) => {
        setmembername(e.target.value)
    }

    const handleEmailCahnge = (e) => {
        setemail(e.target.value)
    }

    const handlePhonenumChange = (e) => {
        setmobilenumber(e.target.value)
    }

    const handleAddmember = () => {

        let tempArray = [
            ...members
        ]
        var id = "id" + Math.random().toString(16).slice(2)
        let obj = {
            id: id,
            membername: membername,
            email: email,
            mobilenumber: mobilenumber,
        }
        tempArray.push(obj)
        setmembers(tempArray)
        clearFileds();
    }

    const clearFileds = () => {
        setmembername('')
        setemail('')
        setmobilenumber('')
    }


    const deleteRow = (id) => {
        let filteredList = members.filter(member => member.id != id)
        setmembers(filteredList)
    }
    return (<div>
        Add member step
        Goal Category is {goalCatSelected}
        Goal name is {goalName}

        goal targetAmount is {targetAmount}

        <Grid container>
            <Grid item>
                <TextField value={membername} onChange={handleNameChange} label='name' required></TextField>
            </Grid>
            <Grid item>
                <TextField value={email} label='email' onChange={handleEmailCahnge} type="email" required></TextField>
            </Grid>
            <Grid item>
                <TextField value={mobilenumber} label='mobile number' onChange={handlePhonenumChange} required></TextField>
            </Grid>
            <Grid item>
                <Button varain='outlined' onClick={handleAddmember}>Add Member</Button>
            </Grid>
        </Grid>

        {members.length > 0 ? (<Grid container>
            <Grid item>
                <Box sx={{ height: 400, width: '100%' }}>
                    <table border={1}>
                        <th>Member Name</th> <th>Email</th> <th>Mobiel Number</th><th>Action</th>
                        {members.map(member => {
                            return (
                                <tr><td>{member.membername}</td><td>{member.email}</td><td>{member.mobilenumber}</td><td><Button onClick={() => deleteRow(member.id)}>Delete</Button></td></tr>
                            );
                        })

                        }
                    </table>
                </Box>
            </Grid>
        </Grid>) : null
        }
    </div>)
}