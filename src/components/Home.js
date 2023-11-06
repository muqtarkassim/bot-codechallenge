import React, { useRef, useState } from "react";
import Bot from "./bot";
import Army from "./botArmy";
import Botcollection from "./botCollection";
export default function Home({data}){
const[armybot,setarmybot]=useState([])

// function to handle when a bot is cliked in botcollection 
function handleclick(id) {
    // Find the selected bot by its ID
    const selectedBot = data.find((item) => id === item.id);
  
    
    if (!armybot.some((bot) => bot.bot_class ===selectedBot.bot_class)) {
      // Add the selected bot to the armybot array
      setarmybot([...armybot, selectedBot]);
    }
  }
   // console.log(armybot)
   // function to remove army from armybot
   function removeFromArmy(id) {
    // Filter out the bot with the specified ID
    const updatedArmybot = armybot.filter((bot) => bot.id !== id);
    setarmybot(updatedArmybot);
  }
// add botArmy
const myArmy=armybot.map((item)=><Bot key={item.id} name={item.name}
img={item.avatar_url}  health={item.health} damage={item.damage} 
shield={item.armor}
phrase={item.catchphrase}
type={item.bot_class}
handleclick={ removeFromArmy}
id={item.id}
/>)
    /////bot collection algorthm
    const bots=data.map((item)=><Bot key={item.id} name={item.name}
    img={item.avatar_url}  health={item.health} damage={item.damage} 
    shield={item.armor}
    phrase={item.catchphrase}
    type={item.bot_class}
    handleclick={ handleclick}
    id={item.id}
    />)
    ///////
    return( <div>
    <Army myArmy={myArmy}/> 
        <Botcollection bots={bots}/>
        </div>
    )
}