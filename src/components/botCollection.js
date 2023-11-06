import React, { useRef } from "react";
import Bot from "./bot";
import Army from "./botArmy";
export default function Botcollection({data}){
    function handleclick(id){
        console.log(id)
    }
    const bots=data.map((item)=><Bot key={item.id} name={item.name}
    img={item.avatar_url}  health={item.health} damage={item.damage} 
    shield={item.armor}
    phrase={item.catchphrase}
    type={item.bot_class}
    handleclick={ handleclick}
    id={item.id}
    />)
    return( <div>
    <Army/>
        <div className="all-bots" >
            {bots}
        </div>
        </div>
    )
}