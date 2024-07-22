import { useDispatch, useSelector } from "react-redux";
import { Grid, Slider, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { setGoalName, setTargetAmount } from "../sharedgoalSlice";
import { Button, Switch, FormControlLabel } from "@mui/material";
import './goaldetails.css'


export default function GoalDetails() {

    const dispatch = useDispatch();

    const goalSelected = useSelector(state => state.sharedGoalReducer.selectedGoalCategory)

    const [goalName, setGoalNameState] = useState('')

    const [targetAmount, setTargetAmountState] = useState()

    const [proceed, setProceed] = useState(false)

    const [selecedMonths, setSelectedMonths] = useState(12)

    const [interestRate, setInterestrate] = useState(7)

    const [switchMonthlyContri, setswitchMonthlyContri] = useState(true)

    const [monthlyContribution, setMonthyContribution] = useState(targetAmount / 12)

    const [totalInterest, setTotalInterest] = useState();

    const [goalNameError, setGoalNameError] = useState(false)

    const [targetAmountError, setTargetAmountErrot] = useState(false)


    useEffect(() => {
        caalculateMonthyContribution();
    }, [selecedMonths, targetAmount])


    const handlegoalName = (e) => {
        setGoalNameState(e.target.value)
        dispatch(setGoalName(goalName))
    }

    const handleTargetAmount = (e) => {
        setTargetAmountState(Number(e.target.value))
        dispatch(setTargetAmount(Number(e.target.value)))
    }

    const handlesendingNameToStore = () => {

    }

    const resetGoal = () => {
        setGoalNameState('');
        setTargetAmountState();
        setProceed(false);
    }


    const setLooksGood = () => {
     
        console.log('target amount', targetAmount)

        if(goalName.length ==0){
            setGoalNameError(true)
            setProceed(false)
        } else if(targetAmount==undefined || targetAmount < 5000){
            setTargetAmountErrot(true)
            setProceed(false)
        } else{
            setProceed(true)
        }
        
    }

    const valueText = (value) => {
        setSelectedMonths(value)
        setInterestrate(value > 15 ? 7.2 : 7)
    }


    const handleSwitchMonthly = (event) => {
        setswitchMonthlyContri(event.target.checked)

    }

    const caalculateMonthyContribution = () => {
        let monthyContributionAmount = targetAmount / selecedMonths
        setMonthyContribution(monthyContributionAmount)
        calculateInterest();
    }

    const calculateInterest = () => {
        let monthlyInterestRate = interestRate / 12;
        let interest = (targetAmount * selecedMonths * monthlyInterestRate) / 100;
        setTotalInterest(interest)
    }



    return (
        <div id="goaldetails-outerdiv">
            <h5 style={{ textAlign: 'center' }}>Selected Goal is {goalSelected}</h5>
            <Grid container id="top-container">
                {!proceed ? (<Grid item>
                    <Grid container flexDirection={"column"} spacing={2}>
                        <Grid item>
                            <TextField value={goalName} label='Goal name' onChange={handlegoalName} onBlur={handlesendingNameToStore} required
                              error = {goalNameError}
                            ></TextField>

                        </Grid>

                        <Grid item>
                            <TextField value={targetAmount} label='Target Amount' onChange={handleTargetAmount} required type="number"
                              error = {targetAmountError} helperText='must be greater than 4999'
                            ></TextField>
                        </Grid>
                    </Grid>
                    <Grid container flexDirection={"row"} spacing={2} style={{marginTop:'8px'}}>
                        <Grid item>
                            <Button onClick={resetGoal}>Clear</Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={setLooksGood}>Proceed</Button>
                        </Grid>
                    </Grid>
                </Grid>) : null
                }
                {proceed ? (<Grid item>
                    <Grid container>
                        <Grid item>
                            <Typography variant="h6">You invest {targetAmount - totalInterest}</Typography>
                            <Typography variant="h6">You Get {targetAmount}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>Select the number of months you need to fullfill your goal</Typography>
                            <Slider defaultValue={12} aria-label="Default" valueLabelDisplay="on"
                                getAriaValueText={valueText}
                                min={6} max={60}
                            />
                            <div>Selected Months are {selecedMonths}</div>
                            <div>You will get interest rate of {interestRate}</div>
                            <div>Want to contribute monthly ?
                                <FormControlLabel control={<Switch checked={switchMonthlyContri} onChange={handleSwitchMonthly} />} label="monthly contribution" />
                            </div>
                        </Grid>
                        {
                            switchMonthlyContri ?
                                (

                                    <Grid item>
                                        <Typography>Your Monthly Contribution amount will be {monthlyContribution}</Typography>
                                        {console.log('monthly contribution' + monthlyContribution)}
                                    </Grid>

                                ) :

                                null
                        }

                    </Grid>

                </Grid>) : null
                }
            </Grid>
        </div>
    );
}