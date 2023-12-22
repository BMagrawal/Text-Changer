
import {Routes,
Route,
Switch } from "react-router-dom";
import "./App.css";
import Alart from "./component/Alert";
import Navbar from "./component/Navbar";
import TextArea from "./component/TextArea";
import React, { useState } from 'react';
import About from "./component/AboutMe";





function  App(){

  const [mode , setMode] = useState('light');
  const [textMode , setTextMode] = useState('Disable dark mode');
  const [alert , setAlert] = useState(null);

  const [newmode , setnewmode] = useState('primary')

  const showAlert = (massege,type)=>{
    setAlert({
      msg : massege,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  

  const toggleGreen= ()=>{
    if(mode==='dark'){
      setMode('light')
      showAlert("light mode is on","success")
      setnewmode('primary')
      document.body.style.backgroundColor = "white"
      
    }
    else{
      setMode('dark')
      showAlert('green mode is on','success')
      setnewmode('success')
      document.body.style.backgroundColor = "#115133"
     
      

    }
  }

  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light')
      setTextMode("Disable dark mode")
      showAlert("light mode is on","success")
      document.body.style.backgroundColor = "white"
      
    //   let style = {
    //     color : 'black',
    //     backgroundColor : 'white'
    // }

    
      // setTextLight('dark')
    }
    else{
      setMode('dark');
      setTextMode(" Enable dark mode");
      showAlert("dark mode is on","success")
      document.body.style.backgroundColor = "#1B0547";
      
    //    let style = {
    //     color : 'white',
    //     backgroundColor :  'black'
    // }
      // setTextLight('light')
    }
  }
  return(
    
    <>
    <Navbar NavbarTitle="TextChanger" mode={mode} toggleMode={toggleMode} textMode = {textMode} toggleGreen={toggleGreen} />
    <Alart alert= {alert}/>
    

    <Routes>
        <Route exact path='/' element={<TextArea  toggleMode={toggleMode} showAlert = {showAlert} mode={mode} toggleGreen ={toggleGreen} newmode={newmode} />}></Route>
        <Route exact path='/about' element={<About/>} ></Route>
      </Routes>
    </>
  )
}
export default App; 
