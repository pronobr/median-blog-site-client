import logo from './logo.svg';
import './App.css';
import Navbar from './components/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Categories from './components/Shared/Categories/Categories';


function App() {
  return (
    <div className="app">
     <Navbar></Navbar>
     <Categories></Categories>

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
       
      </Routes>
    </div>
  );
}

export default App;
