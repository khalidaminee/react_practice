// Function Component

import React from "react";

// function Greetings(){
//     return <h1>Hello to react developers!</h1>
// }

export const Greetings = props => {
    const {name, position} = props;
    return (
        <div>
            <h1>Hello Dear {name}, {position}!</h1>
           
            {props.children}
        </div>
     
         
         
    )   
}
    
// export default Greetings;