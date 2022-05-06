import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';
import './App.css';



class App extends Component {
  state = { 
        counters : [
             {id:1 , value:0},
             {id:2 , value:0},
             {id:3 , value:0},
             {id:4 , value:0},
             {id:5 , value:0},
             {id:6 , value:0},
        ] 
     };
     handleDelete = (counterId) => {
         console.log("Event handler delete called!!!" , counterId); 
         const counters = this.state.counters.filter(c => c.id !== counterId); // we cannot dírectly modify the object in react so creat new array and filter the counter which has the id not equals  
         //this.setState({counters: counters}) overright counters object with counters const but key and value are same so one counters is enough
         this.setState({counters});
     };
     handleReset = () => {
         const counters =  this.state.counters.map( c => 
            {
                c.value = 0;
                return c;
            })
            this.setState({counters});
     };

     handleIncrement = counter  =>{
        const counters = [...this.state.counters]; // cloning counters array from state object to counters const

        const index = counters.indexOf(counter);
        counters[index] = {...counter}; // cloning counter object to  the array element corresponding to the index
        counters[index].value ++ ;
        this.setState({counters});
     }
  render() { 
    return (
    <React.Fragment>
     <NavBar/>
     <main className="container">
     <Counters
     counters = {this.state.counters} 
     onReset = {this.handleReset} 
     onIncrement ={this.handleIncrement}
     onDelete = {this.handleDelete} />
     </main>
    </React.Fragment>
    );
  }
}

  
  


export default App;
