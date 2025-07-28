// JSX

import React, { createElement } from "react";

const Hello = () => {
    // return (
    //     <div id="1" className="jsxClass">
    //         <h1> Hello World!</h1>
    //         <h1> Hello World!</h1>
    //     </div>
    // )
    
    return React.createElement('div', {id:'1', className:'jsxClass'} , createElement('h1', null, 'Hello World!'));
}

export default Hello;