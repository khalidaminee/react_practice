// rce sinping for creating class component
import React, { Component } from 'react'

class ClassClick extends Component {
     classHandler(){
        console.log("Class Click Event Handler.");
    }
  render() {
   
    return (
      <div>
        <button onClick={this.classHandler}>Click Handler</button>
      </div>
    )
  }
}

export default ClassClick
