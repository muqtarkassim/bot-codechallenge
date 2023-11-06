import React, { useRef } from "react";
import "./App.css";
import HeartBrokenIcon from '@mui/icons-material/HeartBroken'; 
import { Bolt, Dangerous, EmergencyShareOutlined, FlightTakeoff, Medication, Shield, ShieldTwoTone, Woman2Outlined } from "@mui/icons-material";

export default function Bot({ img, name, health, damage, shield, type, phrase, handleclick, id }) {
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
              <HeartBrokenIcon /> {health}
            </span>
            <span> <Bolt/>{damage}</span>
            <span><Shield/> {shield}</span>
          </p>
        </div>
      </div>
    </div>
  );
}