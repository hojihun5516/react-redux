import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import TodoList from './components/todoList/TodoList';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
              <div>
             <Link to='/'>Calc</Link> 
             </div>
             <Link to='/todo'>Todo</Link>
             <Route exact path='/' component={Calculator} />
             <Route exact path='/todo' component={TodoList} />
             </div>
        </Router>
      </div>
    );
  }
}

export default App;
