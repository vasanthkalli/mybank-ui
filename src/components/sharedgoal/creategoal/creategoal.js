import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import GoalSelection from './goalselection/goalselection';
import GoalDetails from '../goaldetails/goaldetails'
import AddMember from '../addmembers/addmembers'
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { useNavigate } from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useSelector } from 'react-redux';
import GoalSummary from '../goalSummary/goalSummary';
import MainHeader from '../../mainheader/mainheader';



const steps = ['Select Goal Category', 'Enter Goal Details', 'Add Members', 'Goal Summary'];
const pages = ['Fixed Deposits', 'Recurring Deposits', 'sharedgoals'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function CreateGoal() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const goals = useSelector(state => state.sharedGoalReducer.goalCategories)

    const navigate = useNavigate();
    const loggedInUser = useSelector(state => state.loginReducer.loggedInUser)
    const proceed = useSelector(state => state.sharedGoalReducer.proceed)
    const isMemberAdded = useSelector(state => state.sharedGoalReducer.IsmemberAdded)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (page) => {
        navigate(`/${page}`)
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);

        if(activeStep === steps.length) {
            //send request to backend
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };






    return (
        <div>
          <MainHeader/>

            <Box sx={{ width: "90%" }} style={{ marginTop: '70px', marginLeft: '20px', marginRight: '20px', marginBottom: '10px' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        //   if (isStepOptional(index)) {
                        //     labelProps.optional = (
                        //       <Typography variant="caption">Optional</Typography>
                        //     );
                        //   }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>



                {
                    activeStep === steps.length ? (
                        <Grid container alignItems={'center'} justifyContent={'center'}>
                            <Grid item>
                                <React.Fragment>
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        All steps completed - you successfully created a Goal.
                                        The members you added will recieve email notification
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        <Button onClick={handleReset}>Reset</Button>
                                    </Box>
                                </React.Fragment>
                            </Grid>
                        </Grid>
                    ) : (
                        <React.Fragment>
                            <div>
                                <Grid container alignItems={'center'} justifyContent={'center'}>
                                    <Grid item>
                                        {activeStep + 1 == 1 ? (

                                            <div style={{ marginTop: '30px' }}>

                                                <GoalSelection goals={goals} />
                                            </div>
                                        ) : (null)}
                                        {activeStep + 1 == 2 ? (

                                            <div>
                                                     <GoalDetails goals={goals} />
                                               
                                            </div>
                                        ) : (null)}

                                        {activeStep + 1 == 3 ? (

                                            <div>
                                        
                                             <AddMember goals={goals} />
                                            </div>
                                        ) : (null)}
                                        {
                                            activeStep +1 == 4 ? (
                                                <GoalSummary/>
                                            ):null
                                        }
                                    </Grid>

                                </Grid>
                                <Typography sx={{ mt: 2, mb: 1 }}>


                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button onClick={handleNext} disabled={(!proceed && activeStep===1) || (!isMemberAdded && activeStep ===2) }>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </Box>
                            </div>
                        </React.Fragment>
                    )
                }


            </Box>
        </div>
    );
}