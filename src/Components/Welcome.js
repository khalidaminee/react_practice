//Class Component

import React, {Component} from "react"
class Welcome extends Component {
   
    render() {
        const {name, position} = this.props;
        return <h1>Most welcome! Mr. {name}, to the {position} position.</h1>
    }
}

export default Welcome