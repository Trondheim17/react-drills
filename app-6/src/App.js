import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/todo'


class App extends Component {
  constructor() {
    super()

    this.state = {
      list: [],
      input: ''
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }


  handleInputChange(value) {
    this.setState({ input: value })
  }

  handleAddTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }

  render() {
    let list = this.state.list.map((elem, index) => {
      return <Todo key={index} task={elem} />
    })
    return (
      <div className="App">
        <h1> Todo List: </h1>
        <div>
          <input value={this.state.input} placeholder='New Task' onChange={e => this.handleInputChange(e.target.value)} />
          <button onClick={this.handleAddTask}>Add</button>
        </div>

        <br />

        {list}
      </div>

    );
  }
}

export default App;

