import React from "react";


export default function Army({myArmy}){
    return(
        <div className="army">
        <h2> Here is your Bot Army !</h2>
        <div className="all-bots">
        {myArmy}
        </div>

        </div>
    )
}