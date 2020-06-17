import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Joey', age: 28 },
      { name: 'Sierra', age: 25 },
      { name: 'GW', age: 11 },
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Yooo, I'm a REACT APPLICATION</h1>
        <button>Switch Name</button>
        <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age } />
        <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age } >My Hobbies: 🥴</Person>
        <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age } />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, "Yooo, I'm a REACT APPLICATION!!?"));
  }
}

export default App;
