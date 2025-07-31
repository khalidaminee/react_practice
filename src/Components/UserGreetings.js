import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogedIn: true
      }
    }

   
    
  render() {

    return this.state.isLogedIn && <div>Welcome to react course </div>
    // return(
    //     this.state.isLogedIn ? <div><h1>Welcome to react learning course!</h1></div> : <div><h1>Welcome Guest!</h1></div>
        
    // )
    // let message 

    // if(this.state.isLogedIn){
    //     message = <div> <h1> Welcome to react practice! </h1></div>
        
    //     // return(
    //     //     <div>
    //     //         <h1> Welcome to react practice! </h1>
    //     //     </div>
    //     // )
    // }
    // else{
    //     message = <div><h1> Welcome Guest! </h1></div>
    //     // return(
    //     //     <div>
    //     //         <h1> Welcome Guest! </h1>
    //     //     </div>
    //     // )
    // }
    // return(
    //     <div>  
    //     {message}
    //     <button onClick={()=> this.setState({isLogedIn: true})}>Login</button>
    //     </div>
    // )
    
  }
}

export default UserGreetings
