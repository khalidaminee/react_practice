//Class Component

import React, {Component} from "react"
class Welcome extends Component {
   
    render() {
        const {name, position} = this.props;
        // const {state1, state2} = this.state;
        return <h1>Most welcome! Mr. {name}, to the {position} position.</h1>
    }
}

export default Welcome