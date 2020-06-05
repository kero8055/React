import React, { Component } from 'react';

class Arrow extends Component{
    constructor(props){
        super(props);
        this.state={
            data:'Akhil is reading React'
        }
    }
    handleEvent=(event)=>{
        //console.log(this.props);
        this.setState({data: event.target.value});
    }
   
    render(){
        return(
            <div className="App">
                <h2>React constructor Example</h2>
                <input type="text" value={this.state.data} onChange={this.handleEvent}/>
                <input type="text" />
                
                <button onClick={this.handleEvent}>Click fr Arrowfn</button>
            </div>
        );
    }
    
        
    

}


export default Arrow;