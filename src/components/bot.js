import React, { useRef } from "react";
import "./App.css";
import HeartBrokenIcon from '@mui/icons-material/HeartBroken'; 
import { Bolt, Shield } from "@mui/icons-material";

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
          {name} <span> {type}</span>
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