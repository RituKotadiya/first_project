import { Routes as BrowserRouter, Route, } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import { useNavigate } from "react-router-dom";
import Myprofile from './components/Myprofile/Myprofile';

function App() {



  return (

    <BrowserRouter>
          <Route path="/Signin" element={<Signin />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/" element={<Homepage />} />
      <Route path="Myprofile" element={<Myprofile />} />

    </BrowserRouter>


   
  );
}

export default App;
