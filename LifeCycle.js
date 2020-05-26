import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:0
        }
        this.setNewNumber= this.setNewNumber.bind(this)
    };
    setNewNumber(){
        this.setState({data:this.state.data+1})
    }
    render(){
        return (
            <div>
            <button onClick ={this.setNewNumber}>INCREMENT</button>
            <Content muNumber = {this.state.data}></Content>
            </div>
        );
    }
}

class Content extends React.Component{
    componentWillMount(){
        console.log('component Will Mount is called');
    }
    componentDidMount(){
        console.log('component Did Mount is called');
    }
    componentWillReceiveProps(newProps){
        console.log('component Will Receive Props');
    }
    shouldComponentUpdate(newProps, newState){
        return true;
    }
    componentWillUpdate(nextProps, nextState){
        console.log('component Will Update');

    }
    componentDidUpdate(prevProps, prevState){
        console.log('component Did Update');
    }
    componentWillUnmount(){
        console.log('component Will Unmount');
    }
    render(){
        return(
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}
 export default App;