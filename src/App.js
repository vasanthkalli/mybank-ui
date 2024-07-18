
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/login/Login';
import NoPage from './components/NoPage';
import Profile from './components/profile/Profile'
import Dashboard from './components/dashboard/dashboard'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path="/*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
