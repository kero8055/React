import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './App1';
import ParentComponent from './App';
import Cons from './Constructor';
import * as serviceWorker from './serviceWorker';
import App from './LifeCycle';

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

/*let HelloReact= React.createClass({
  getInitialState: function(){
    return {
      myMessage: 'I am from default state'
    };
  },
  updateMyMessage: function(e){
    this.setState({myMessage: e.target.value});
  },
  render:function() {
    return(
      <div>
        <input type="text" onChange="{this.updateMyMessage}"></input>
        <div>Hello React</div>
        <div>
          {this.state.myMessage}
        </div>
      </div>
    );
  }
});
ReactDOM.render(<HelloReact/>,document.getElementById('view'));*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
