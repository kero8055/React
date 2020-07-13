import React from 'react';
import {CSSTansitionGroup} from 'react-transition-group';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={items:['Bockchain','ReactJS','TypeScript','JavaTpoint']};
        this.handleAdd=this.handleAdd.bind(this);

    }

    handleAdd(){
        const newItems=this.state.items.concat([
            prompt('Enter Item Name')
            
        ]);
        this.setState({items: newItems});

    }
    handleRemove(i){
        let newItems=this.state.items.slice();
        newItems.splice(i,1);
        this.setState({items:newItems});
    }
    render(){
        const items= this.state.items.map((item, i )=> (

        ));
        return (
          //  Animation Example

        );


    }
}

export default App;