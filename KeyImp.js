import React from 'react';

function ListItem(props){
    const item = props.item;
    return (
    <li>{item}</li>
    );
}
function NameList(props){
    const myLists =props.myLists;
    const listItems=myLists.map((strllist)=>
    <ListItem key={myLists.toString()} item={strllist} />
    );

    return(
        <div>
            <h2>Correct Key usage</h2>
        <ol>{listItems}</ol>
        </div>
    );
}

export default NameList;