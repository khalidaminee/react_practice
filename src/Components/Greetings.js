// Function Component

import React from "react";

// function Greetings(){
//     return <h1>Hello to react developers!</h1>
// }

export const Greetings = props => {
    return (
        <div>
            <h1>Hello Dear {props.name}, {props.position}!</h1>
           
            {props.children}
        </div>
     
         
         
    )   
}
    
// export default Greetings;