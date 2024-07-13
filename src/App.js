import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';   //this Navbar must capital the first letter. cant use the simple
import React, { Component } from 'react';


class App extends Component {

  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 4 }
    ]
  }

  handleIncrement = (counterId) => {
    const counters = this.state.counters.map(counter => {
      if (counter.id === counterId) {
        return { ...counter, value: counter.value + 1 }
        //the second argument specifies additional properties to be added or overwritten in the new object being created
      }
      else { return counter }
    })
    this.setState({ counters })
  }

  handleDecrement = (counterId) => {
    const counters = this.state.counters.map(counter => {

      if (counter.id === counterId) {

        return { ...counter, value: counter.value - 1 }
      }
      else {
        return counter
      }
    })
    this.setState({ counters })
  }


  handleDelete = (counterId) => {
    const newArr = this.state.counters.filter(counterr => counterr.id !== counterId);
    this.setState({ counters: newArr })
  }

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0
      return counter
    }
    )
    this.setState({ counters })
  }


  render() {
    return (
      <React.Fragment>
        <Navbar counterTotal={this.state.counters.filter(c => c.value > 0).length}></Navbar>
        <main className='container'>
          <Counters
            onDelete={(counterId) => (this.handleDelete(counterId))}
            onIncrement={(counterId) => (this.handleIncrement(counterId))}
            onDecrement={(counterId) => (this.handleDecrement(counterId))}
            onReset={this.handleReset}
            counters={this.state.counters}
          ></Counters>
        </main>
      </React.Fragment >
    );
  }
}

export default App;
