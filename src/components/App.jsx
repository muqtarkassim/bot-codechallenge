import React, { useEffect, useState } from "react"
import Botcollection from "./botCollection"

 export default function App(){
const [botdata,setbotdata]=useState([])
    useEffect(()=>{
        fetch("http://localhost:8000/bots")
        .then(r=>r.json())
        .then(data=>setbotdata(data))
    },[])
    return (
        <Botcollection  data={botdata}/>
    )
}