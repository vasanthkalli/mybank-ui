import { TextField } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "@mui/material/Button"
import { Grid, Box } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import { setIsMembersAdded, setGoalmembers } from "../sharedgoalSlice"
export default function AddMember() {

    const goalCatSelected = useSelector(state => state.sharedGoalReducer.selectedGoalCategoryName)
    const goalNameFromStore = useSelector(state => state.sharedGoalReducer.goalName)
    const targetAmountFromStore = useSelector(state => state.sharedGoalReducer.targetAmount)
    const goalId = useSelector(state => state.sharedGoalReducer.goalId)

    const [membername, setmembername] = useState('')
    const [email, setemail] = useState('')
    const [mobilenumber, setmobilenumber] = useState()
    const [members, setmembers] = useState([])

    const [membernameError, setmembernameError] = useState(false)
    const [emailError, setemailError] = useState(false)
    const [mobilenumberError, setmobilenumberError] = useState(false)
    const [memberAdded, setMemberAdded] = useState(false)
    const [validFileds, setValidFileds] = useState(false)

    const dispatch = useDispatch();

    const handleNameChange = (e) => {
        setmembername(e.target.value)
    }

    const handleEmailCahnge = (e) => {
        setemail(e.target.value)
    }

    const handlePhonenumChange = (e) => {
        setmobilenumber(Number(e.target.value))
    }

    const handleAddmember = () => {

        if (validateFileds()) {
            let tempArray = [
                ...members
            ]
        
            let obj = {
         
                username: membername,
                email: email,
                phone: mobilenumber,
                password:"12345",
                enabled:1,
                goal: {
                    id: goalId
                }
            }
            if(!isMemberAlreadyAdded(obj, members)) {
                tempArray.push(obj)
                setmembers(tempArray)
                dispatch(setGoalmembers(tempArray))
                setMemberAdded(true)
                dispatch(setIsMembersAdded(true))
                clearFileds();
            }

        }
    }


    const isMemberAlreadyAdded = (obj, members) => {
        let alreadyAdded = false;
        members.forEach(mem => {
            if(mem.email === obj.email){
                 alreadyAdded = true
            }
        })

        return alreadyAdded;
    }
    const validateFileds = () => {
        if (membername.length == 0) {
            setmembernameError(true)
            setValidFileds(false)
            return false;
        } else if (!(/^\d{10}$/.test(mobilenumber))) {
            setmobilenumberError(true)
            setValidFileds(false)
            return false;
        } else if (!validateEmail(email)) {
            setemailError(true)
            setValidFileds(false)
            return false;
        } else {
            setValidFileds(true)
            return true;
        }
    }

    const validateEmail = (email) => {
        let isvalidEmail = String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );

       return isvalidEmail == null ? false : true;
    }

    const clearFileds = () => {
        setmembername('')
        setemail('')
        setmobilenumber('')
        setmembernameError(false)
        setemailError(false)
        setmobilenumberError(false)
    }


    const deleteRow = (id) => {
        let filteredList = members.filter(member => member.id != id)
        setmembers(filteredList)
    }
    return (
        <div>

            <p style={{ textAlign: 'center' }}>Selected Goal is {goalCatSelected}</p>

            <p style={{ textAlign: 'center' }}>Goal name given {goalNameFromStore}</p>
            <p style={{ textAlign: 'center' }}>Target Amount Entered {targetAmountFromStore}</p>


            <p style={{ textAlign: 'center' }}  >   </p>

            <Grid container alignItems={'center'} justifyContent={'center'} flexDirection={'row'} spacing={2}>
                <Grid item>
                    <TextField value={membername} onChange={handleNameChange} label='name' required
                        error={membernameError}
                    ></TextField>
                </Grid>
                <Grid item>
                    <TextField value={email} label='email' onChange={handleEmailCahnge} type="email" required
                        error={emailError}
                    ></TextField>
                </Grid>
                <Grid item>
                    <TextField value={mobilenumber} label='mobile number' onChange={handlePhonenumChange} required
                        error={mobilenumberError}
                    ></TextField>
                </Grid>
                <Grid item>
                    <Button varain='outlined' onClick={handleAddmember} >Add Member</Button>
                </Grid>
            </Grid>

            {members.length > 0 ? (<Grid container flexDirection={'column'} alignItems={'center'} justifyContent={'center'} spacing={1}>
                <Grid item>
                    <h6>Added members are</h6>
                </Grid>
                <Grid item>
                    <Box sx={{width: '100%' }} style={{marginTop: '0px'}}>
                        <table border={1}>
                            <th>Member Name </th> <th>Email </th> <th>Mobiel Number </th><th>Action</th>
                            {members.map(member => {
                                return (
                                    <tr><td>{member.username}</td><td>{member.email}</td><td>{member.phone}</td><td><Button onClick={() => deleteRow(member.id)}>Delete</Button></td></tr>
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