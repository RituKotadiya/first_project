import { Routes as BrowserRouter, Route, } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';

function App() {



  return (

    <BrowserRouter>

      <Route path="/Signin" element={<Signin />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/" element={<Homepage />} />

    </BrowserRouter>

   

  );
}

export default App;
