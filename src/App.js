import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Userlogin from './components/Userlogin';
import UserRegistartion from './components/UserRegistartion';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Userlogin/>}/>
    <Route path='/register' element={<UserRegistartion/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
