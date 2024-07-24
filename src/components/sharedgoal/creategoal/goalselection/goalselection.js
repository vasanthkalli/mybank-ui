import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import {setSelectedGoalCategory, setSelectedGoalCategoryName} from '../../sharedgoalSlice'


export default function GoalSelection(props) {


    const { goals } = props;
    const [selectedGoal, setSelectedGoal] = React.useState(goals[0].key);
    const dispatch = useDispatch();
    React.useEffect(() => {
        //make call to backend to get goals


    }, [])

    

    const handleChange = (event) => {
        console.log(event.target.value)
        setSelectedGoal(event.target.value);
        dispatch(setSelectedGoalCategory(event.target.value))
        let selectedGoalCat= goals.filter(goal => goal.id===event.target.value)
        let selectedGoalCatName = selectedGoalCat.value;
        dispatch(setSelectedGoalCategoryName(selectedGoalCatName))

    };
    return (
        <div>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Goal</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedGoal}
                        label="Select Goal"
                        onChange={(e) => handleChange(e)}
                    >
                        {
                            goals.map(obj => {
                                return <MenuItem value={obj.key} >{obj.value}</MenuItem>
                            })
                        }

                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}