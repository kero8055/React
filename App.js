import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {props.name}
        </a>
      </header>
    </div>
   
  );
}

class PlainDiv extends React.Component{
  render(){
      return <div>I am one line,so i don't need parantheses</div>
  }
}
 class Photo extends React.Component{
   render(){
     return(
       <figure>
          <img src={logo} className="App-logo" alt="logo" />
         <figcaption>Whoa</figcaption>
       </figure>
     )
   }
 }
 class Table  extends React.Component{
   render(){
     return (
       <table>
         <tr>
           <th>ID</th>
           <th>Name</th>
         </tr>
         <tr>
           <th>1225</th>
           <th>Akhil</th>
         </tr>
         </table>
     )
   }
 }
 class ParentComponent extends React.Component{
   render(){
     return(
       <main>
         <App name="Akhil" />
         <PlainDiv/>
         <Photo/>
         <Table/>
       </main>
     )
   }
 }


export default ParentComponent;

