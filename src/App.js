
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import NoPage from './components/NoPage';

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<NoPage />} />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
