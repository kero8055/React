import React from 'react';

function CustomInput(props){
    let callRefInput =React.createRef();
    function handleClick(){
        callRefInput.current.focus();  
    }

return (
    <center>
    <div>
        <h2>Adding Ref to Component</h2>
        <input type="text" ref={callRefInput} />
        <input type="button" value="AddTextInput" onClick={handleClick} />
        </div>
        </center>
        
);
}
class Reff extends React.Component{
    constructor(props){
        super(props);
        this.callRefInput=React.createRef();
      //  this.addingRefInput=this.addingRefInput.bind(this);
    }
    fousRefInput(){
        this.callRefInput.current.focus();
    }
    render(){
        return (
            <CustomInput ref={this.callRefInput} />
            );
    }
} 
export default Reff;