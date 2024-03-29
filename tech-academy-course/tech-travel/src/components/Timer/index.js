import React, { Component } from "react";

class Timer extends Component {

    constructor( props ) {
        super( props )
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        this.Timer = setInterval(() => this.tick(), 2000)
    }

    componentWillUnmount() {
        clearInterval(this.Timer)
    }
    
    tick() {
        this.setState({
            count: this.state.count + 1
        })
    };

    render() {
        return (
            <p>{this.state.count}</p>
        )
    }
}

export default Timer;