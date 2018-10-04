import React, { Component } from 'react';
import './App.css';
import ToDoForm from './ToDoForm'
import List from './List'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  
  state = {todos: []}
  
  addItem = (name) => {
    const { todos } = this.state
    const newkey = {id: Math.random(), name }
    this.setState({ todos: [...todos, newkey] })
  }
  
  render() {
    
    const { todos } = this.state
    
    return (
      <Router>
      <div className="App">
       {/* <Link to >About Page</Link> */}
        <ul>
          <ToDoForm addItem={this.addItem} />
          <List 
            name="To Do List"
            items={todos}
          />
        </ul>      
      </div>
      </Router>
    );
  }
}

export default App;
