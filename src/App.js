
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/login/Login';
import NoPage from './components/NoPage';
import Profile from './components/profile/Profile'
import Dashboard from './components/dashboard/dashboard'
import Sharedgoal from './components/sharedgoal/sharedgoal';
import CreateGoal from './components/sharedgoal/creategoal/creategoal';

import { useSelector } from 'react-redux';

function App() {
 
  const userLoggedIn = useSelector(state => state.loginReducer.loginSuccess)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile/>}/>
      {userLoggedIn ?   <Route path="/dashboard" element={<Dashboard/>} />: null}
      {userLoggedIn ? <Route path="/sharedgoals" element={<Sharedgoal/>}/>: null}
      {userLoggedIn ? <Route path="/creategoal" element = {<CreateGoal/>}/>: null}
      <Route path="/*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
