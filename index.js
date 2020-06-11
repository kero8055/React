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
import ErrorMsg from './ErrorMessage';

ReactDOM.render(<Box />,document.getElementById('arr'));
ReactDOM.render(<ErrorMsg />,document.getElementById('error'));

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
