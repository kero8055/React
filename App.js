import React from 'react';

class App extends React.Component {
    render() {
       return (
          <div>
             <ul>
             <li>Home</li>
             <li>About</li>
             <li>Contact</li>
             </ul>
             {this.props.children}
          </div>
       )
    }
 }
 export default App;
 