import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './App1';
import ParentComponent from './App';
import Cons from './Constructor';
import * as serviceWorker from './serviceWorker';
import App from './LifeCycle';
import Arrow from './ArrowFn';
import Box from './TextBox';
import ListItem from './listExam';
import ErrorMsg from './ErrorMessage';

ReactDOM.render(<Box />,document.getElementById('arr'));
const myList=['Arun','Bob','Winnie'];
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
ReactDOM.render(<App />,document.getElementById('app')
);
setTimeout(()=>{
  ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);

ReactDOM.render(<Cons />,document.getElementById('con'));

serviceWorker.unregister();
