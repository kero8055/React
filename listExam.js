import React from 'react';

const myFriendList=['Harry','Ron','Harmoine'];
const listItem= myFriendList.map((myFriendList)=>{
return <li>{myFriendList}</li>;
});
//<li>Harry</li>
class ListDiv extends React.Component{
    render(){
        return <ul>{listItem}</ul>
    }
  }
 function NameList(props){
     const myList =props.myList;
     const Item= myList.map((val)=>{
        return <li>{val}</li>;
        
 });
 return(
     <div>
    <h2>Rendering List inside Component</h2>
        <ul>{Item}</ul>
        </div>
 );
 }
export default NameList;
  