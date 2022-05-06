import React, { Component } from 'react';

class Counter extends Component {
    // state = { 
    //     count : this.props.counter.value
    //  } 
     
    //  handleIncrement = () => {
    //      console.log("Increment clicked" , this);
    //      this.setState( {count: this.state.count + 1});
    //  };

    render() { 
        
        return (
            <div>
                <span className= {this.getBadgeClasses()}> {this.formatCount()} </span>
                <button  onClick={() => this.props.onIncrement(this.props.counter)}className='btn btn-secondary btn-sm'>Increment</button>
                <button className='btn btn-danger btn-sm m-2' onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>

            </div>
        )
    }
    getBadgeClasses(){
         let classes = "btn m-2 btn-";
         classes += this.props.counter.value === 0 ? "warning" : "primary";
         return classes;
     }

    formatCount(){
        const {value} = this.props.counter; 
        return value === 0 ? 'Zero' : value;
    }

    }
 
export default Counter ;