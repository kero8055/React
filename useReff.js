import React from 'react';

function useRefExample(){
    const inputRef=useRef(null);
    const onButtonClick =() =>{
        inputRef.current.focus();
        console.log(inputRef.current.value);
    };
    return(
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={onButtonClick}>Submit UseRef</button>
        </div>
    );
}
export default useRefExample;