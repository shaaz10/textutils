
import { useState } from 'react';
import './App.css';
import Textform from './components/Textform';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode,setmode]=useState('light');

  const [alert,setAlert]=useState(null);
  
 

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
setAlert(null);
  },1500);
}



 const ToggleMode=()=>{
    if(mode==='light'){
        setmode('dark')
      document.body.style.backgroundColor='#192734 ';
      document.title='TextUtils-DarkMode'
      showAlert("Dark mode is enabled","success")
        }
        else{
          setmode('light')
          document.body.style.backgroundColor='white';
          document.title='TextUtils-LightMode'
          showAlert("light mode is enabled","success")
        }
}




  return (<>




<Router>
<Navbar mode={mode} ToggleMode={ToggleMode}/>
<Alert Alert={alert}/>
<Routes>

  <Route exact path="/" element={<Textform  showAlert={showAlert} mode={mode} Alert={alert}/>}/>
    <Route  path="/About" element={<About/>}/>
    
</Routes>
    </Router>

 
    <div classname="container my-3" >
   


    
  </div>
   
   
  </>
  );
} 

export default App; 
  