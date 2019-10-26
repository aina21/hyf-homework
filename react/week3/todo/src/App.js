import React from "react";

import "./App.css";
import * as API from "./api";

import TodoList from "./components/TodoList";
import TodoItems from "./components/TodoItems";
import Counter from "./components/counter";

import Container from "react-bootstrap/Container";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        id: "",
        description: "",
        deadline: new Date(),
        isComplicated: false,
      }
    };
  }

  async componentDidMount() {
    const items = await API.getList();
    this.setState({ items });
  }

  handleInput = e => {
    const itemText = e.target.value;
    const newId = this.state.items.length + 1;
    const currentItem = {
      id: newId,
      description: itemText,
      deadline: this.state.currentItem.deadline
    };
    this.setState({
      currentItem
    });
  };

  handleEdit = (id, e) => {
    const index = this.state.items.findIndex(item => {
      return item.id === id;
    });
    this.state.items[index].description = e.target.value;
    this.forceUpdate();
  };

  handleChangeDate = date => {
    const currentItem = {
      id: this.state.currentItem.id,
      description: this.state.currentItem.description,
      deadline: date
    };
    this.setState({
      currentItem
    });
  };

  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.description !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { description: "" }
      });
    }
  };

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.id !== key;
    });
    this.setState({
      items: filteredItems
    });
  };

  toggleTodoComplete = key => {
    const temporaryItems = this.state.items.map(item => {
      if (item.id === key) item.isComplicated = !item.isComplicated;
      return item;
    });
    this.setState({
      items: temporaryItems
    });
  };

  render() {
    return (
      <Container className="App mainForm">
        <h2>Todo List</h2>
        <Counter initialCounter={1}></Counter>
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          handleChangeDate={this.handleChangeDate}
          currentItem={this.state.currentItem}
        />
        <TodoItems
          entries={this.state.items}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          handleEdit={this.handleEdit}
          toggleTodoComplete={this.toggleTodoComplete}
        />
      </Container>
    );
  }
}

export default App;
