import React from 'react';
class Reff extends React.Component{
    constructor(props){
        super(props);
        this.callRef=React.createRef();
    }
    render(){
        return <div ref={this.callRef}/>
    }
} 
export default Reff;