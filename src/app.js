import React from 'react'

import Message from "~components/Message"

class App extends React.Component {
    render(){
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}

export default App