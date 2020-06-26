import React from 'react';

const TextInput =React.forwardRef((props,ref)=>(
<input type="text" placeholder="Hello" ref={ref} />
));

const inputRef= React.createRef();

class CustomTextInput extends React.Component{
    handleSubmit =(e)=>{
        e.preventDefault();
        console.log(inputRef.current.value);
    };
    render(){
        return(
            <center>
            <div>
                <form onSubmit={e=>this.handleSubmit(e)}>
                    <TextInput ref={inputRef} />
                    <button>Submit</button>
                </form>
            </div>
            </center>
        );
    }
}
export default CustomTextInput;