import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loggedInUser: {
    username: '',
    token:'',
    expiryToken: ''
  },
  loginSuccess: false,
  loginSubmitted: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {

        setLoggedInUser: (state, action) => {
            state.loggedInUser = action.payload
        },
        setLoginStatus: (state, action) => {
             state.loginSuccess = action.payload
        },

        setLoginSubmitted: (state, action) =>{
            state.loginSubmitted=  action.payload
        },

        setVal: (state, action) => {
            state.testVal = action.payload;
        }
    }
})

export const {setLoggedInUser,setLoginStatus, setLoginSubmitted} = loginSlice.actions
export default loginSlice.reducer