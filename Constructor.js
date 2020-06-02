import React, { Component } from 'react';

class Cons extends Component{
    constructor(props){
        super(props);
        this.state ={
            data:'c=AkhilUsing'
        }
        this.handleEvent =this.handleEvent.bind(this);
    }
    handleEvent(){
        console.log(this.props);
    }
    render(){
        return(
            <div className="Constructor">
                <h2>React Constructor Demo</h2>
                {this.state.data}
                <input type="text" value="" />
                <button onClick={this.handleEvent}>Click Me</button>
            </div>
        );
    }
}

export default Cons;