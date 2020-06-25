import React from 'react';
class Reff extends React.Component{
    constructor(props){
        super(props);
        this.callRef=React.createRef();
        this.addingRefInput=this.addingRefInput.bind(this);
    }
    addingRefInput(){
        this.callRef.current.focus();
    }
    render(){
        return (
            <center>
        <div>
            <h2>Adding Ref to Dom Element</h2>
            <input type="text" ref={this.callRef} />
            <input type="button" value="AddTextInput" onClick={this.addingRefInput} />
            </div>
            </center>
            
            );
    }
} 
export default Reff;