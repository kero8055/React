import React from 'react';
//import ReactDOM from 'react-dom';
import posed from 'react-pose';
import './style.css';


const Box = posed.div({
    left: { x: -100 },
    right: { x: 100 }
  })
  
 
class Example extends React.Component {
  state = { isVisible: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

  render() {
   // const Component = ({ position }) =>
    
    const { position } = this.state;
    return <Box pose={position} />;
  }
}

export default Example;
//ReactDOM.render(<Example />, document.getElementById('root'));
