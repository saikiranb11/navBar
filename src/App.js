import React from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import Mainpage from './Components/Mainpage';
function App() {
  return (
  
  <div>
   
  <Routes>
    <Route path='/' element={<Mainpage/>}/>
  <Route path='/Main' element={<Main/>}/>
  </Routes>
    </div>
    
  );
}

export default App;
