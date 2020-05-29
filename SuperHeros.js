import React from 'react';
class SuperHeros extends React.Component{
    render(){
        return <ul>
           <SuperHerosClass name="Batman" />
           <SuperHerosClass name="Superman" />
           <SuperHerosClass name="Spiderman" />
           <SuperHerosClass name="Hulk" />
        </ul>;
    }
}
class SuperHerosClass extends React.Component{
    render(props){
        return <li>
            <h3>{this.props.name}</h3>
            
        </li>;
    }
}


export default SuperHeros;