
import { Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';



function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <h1>Welcome to my React Website</h1>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>


  );
}

export default App;
