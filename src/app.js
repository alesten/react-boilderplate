require('file?name=[name].[ext]!../index.html')

import React from 'react'
import ReactDOM from 'react-dom'

import "~styles/vendors.scss"

import Message from "~components/Message"

class App extends React.Component {
    render(){
        return (
            <div className="container">
                <Message />
            </div>
        )
    }
}

ReactDOM.render(<App />,
    document.getElementById('react-container'))