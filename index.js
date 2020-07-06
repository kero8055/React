import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, Link } from 'react-router';
import './index.css';
import Table from './App1';
import ParentComponent from './App3';
import Cons from './Constructor';
import * as serviceWorker from './serviceWorker';
import App2 from './LifeCycle';
import Arrow from './ArrowFn';
import Box from './TextBox';
import ListItem from './listExam';
import ErrorMsg from './ErrorMessage';
import Key from './KeyImp';
import Reff from './Ref';
import RefComp from './RefComp';
import Refcall from './RefCallback';
import CompRef from './ComponentRef';
//import { Router, Route, Link, browserHistory } from 'react-router';
import { Route, Link, BrowserRouter as Router, NavLink, Switch } from 'react-router-dom';
import App from './App';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Notfound from './notfound';



ReactDOM.render((
  <Router>
    <div>
    <h1>This is React Router Demo</h1>
    <ul>
      <li>
        <NavLink to="/" activeStyle={{color:'green'}}><b>Home</b></NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={{color:'blue'}}><b>About</b></NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeStyle={{color:'cyan'}}><b>Contact</b></NavLink>
      </li>
    </ul>
    <Switch>
     <Route  path = "/" component = {App} />
     <Route path = "/about" component = {About} />
     <Route path = "/contact" component = {Contact} />
     <Route  component = {Notfound} />
    </Switch>
     </div>
  </Router>
), document.getElementById('Link'));

/*const routing=(
  <Router >
  <Route path = "/" component = {Arrow}>
    
     <Route path = "Arrow" component = {Arrow} />
    
  </Route>
</Router>
);
ReactDOM.render(routing,document.getElementById('Link'));*/
class App1 extends React.Component{
  render(){
    return(
      <React.Fragment>
        <h1>Hello React.js</h1>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App1 />,document.getElementById('app1'));
ReactDOM.render(<CompRef />,document.getElementById('refComp1'));
ReactDOM.render(<Refcall />,document.getElementById('refCall'));
ReactDOM.render(<Reff />,document.getElementById('reff'));
ReactDOM.render(<RefComp />,document.getElementById('refComp'));
ReactDOM.render(<Box />,document.getElementById('arr'));
const myList=['Arun','Bob','Winnie'];
ReactDOM.render(<Key myLists={myList} />,document.getElementById('key'));

ReactDOM.render(<ListItem myList={myList} />,document.getElementById('lis'));
ReactDOM.render(<ErrorMsg />,document.getElementById('error'));
let numbers=[1,2,3,4,5];
let multiplyNums= numbers.map((value)=>{
  //alert(value);
  return (value*3);
});
//alert('New Array'+multiplyNums);

ReactDOM.render(<Arrow />,document.getElementById('arrow'));

ReactDOM.render(
  <React.StrictMode>
    <ParentComponent />
    
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <Table />
    
  </React.StrictMode>,
  document.getElementById('panel')
);
ReactDOM.render(<App2 />,document.getElementById('app')
);
setTimeout(()=>{
  ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);

ReactDOM.render(<Cons />,document.getElementById('con'));

serviceWorker.unregister();
