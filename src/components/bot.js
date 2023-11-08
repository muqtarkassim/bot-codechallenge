import React, { useRef } from "react";
import "./App.css";
//import  from '@mui/icons-material/HeartBroken'; 
import { Bolt, Dangerous, EmergencyShareOutlined, FlightTakeoff, HeartBrokenOutlined, Medication, Shield, ShieldTwoTone, Woman2Outlined } from "@mui/icons-material";

export default function Bot({ img, name, health, damage, shield, type, phrase, handleclick, id,handledelete }) {
  const ArmyRef = useRef();
  console.log();

  return (
    <div className="all-div" ref={ArmyRef}>
      <div className="image-div" onClick={() => handleclick(id)}>
        <img src={img} alt="img"></img>
      </div>
      <div className="content">
        <h5>
          {name} <span>  {type === "Support" ?  <EmergencyShareOutlined/>: type === "Defender" ? <ShieldTwoTone/>
           :type==="Medic"?<Medication/> :type==="Witch"?<Woman2Outlined/>:type==="Captain"?<FlightTakeoff/>:type="Assault"?

           <Dangerous/>: null} {shield}</span>
        </h5>
        <p>{phrase}</p>
        <hr></hr>
        <div className="inner-details">
          <p>
            <span>
              <HeartBrokenOutlined/> {health}
            </span>
            <span> <Bolt/>{damage}</span>
            <span><Shield/> {shield}</span>
          </p>
        </div>
      </div>
      <button onClick={()=>handledelete(id)}>Discharge</button>
    </div>
  );
}