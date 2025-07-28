//Class Component

import React, {Component} from "react"
class Welcome extends Component {
  
    render() {
        return <h1>Most welcome! Mr. {this.props.name}, to the {this.props.position} position.</h1>
    }
}

export default Welcome