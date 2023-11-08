import React, { useRef } from "react";

export default function Botcollection({bots}){
   
    return( <div>
    <h1>Bot Collections !!</h1>
    <p>choose only one bot from each class</p>
    <h6>click on the photo to add to your army</h6>
        <div className="all-bots" >
            {bots}
        </div>
        </div>
    )
}