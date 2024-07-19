import { useSelector } from "react-redux"
export default function AddMember(){

    const goalCatSelected  = useSelector(state => state.sharedGoalReducer.selectedGoalCategory)
    const goalName  = useSelector(state => state.sharedGoalReducer.goalName)
    const targetAmount  = useSelector(state => state.sharedGoalReducer.targetAmount)

    return (<div>
        Add member step
        Goal Category is {goalCatSelected}
        Goal name is {goalName}

        goal targetAmount is {targetAmount}
    </div>)
}