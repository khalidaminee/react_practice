import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello',
      }

      this.setMessage = this.setMessage.bind(this)
    }

    // setMessage(){
    //     this.setState({
    //         message: 'Good Bye!',
    //     })
    //     console.log(this);
    // }
    
    setMessage = () => {
        this.setState({
            message: 'Good Bye!'
        })
    }
  render() {
    return (
      <div>
            <p> {this.state.message} </p>
            {/* <button onClick={this.setMessage.bind(this)}>Click to Goodbye!</button> */}
            {/* <button onClick={() => this.setMessage()}>Click to Goodbye!</button> */}
            <button onClick={this.setMessage}>Click to Goodbye!</button>
      </div>
    )
  }
}

export default EventBind
