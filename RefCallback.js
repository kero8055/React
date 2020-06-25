import React from 'react';
class Reff extends React.Component{
    constructor(props){
        super(props);
        this.callRefInput=null;
        this.setInputRef= element =>{
            this.callRefInput= element;
        };
        this.focusRefInput=() =>{
                //Focus the input using the raw DOM API
                if(this.callRefInput) this.callRefInput.focus();
        };
        //this.addingRefInput.bind(this);
    }
    componentDidMount(){
        this.focusRefInput();
    }
    render(){
        return (
            <center>
        <div>
            <h2>Callback Ref Demo</h2>
            <input type="text" ref={this.setInputRef} />
            <input type="button" value="Focus input Text" onClick={this.focusRefInput} />
            </div>
            </center>
            
            );
    }
} 
export default Reff;