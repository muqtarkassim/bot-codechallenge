import React, { useEffect, useState } from "react"
import Home from "./Home"
import Navbar from "./navbar"
import {  Routes, Route } from "react-router-dom";

 export default function App(){
const [botdata,setbotdata]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8000/bots")
        .then(r=>r.json())
        .then(data=>setbotdata(data))
    },[])
    return (
        <div>
        <Navbar/>

    
      <Routes>
       
          <Route index element={<Home data={botdata} setbotdata={setbotdata}/>} />
          
        
      </Routes>
    
      
        
        
     
        </div>
        
    )
}