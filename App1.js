import React from 'react';
import logo from './logo.svg';
import './App1.css';
import SuperHeros from './SuperHeros';

class Table  extends React.Component{
    render(){
      return (
      <div><SuperHeros/>
      
      <table>
          <tr>
            <th>Table2</th>
            <th>Table2Name</th>
          </tr>
          <tr>
            <th>1225</th>
            <th>Akhil</th>
          </tr>
          </table>
      
      </div>
        
      
      )
      
    }
  }

  export default Table;