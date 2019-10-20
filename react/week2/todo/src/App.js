import React from "react";
import "./App.css";
import TodoList from "./TodoList";
import TodoItems from "./TodoItems";
import Counter from "./counter";
import Container from "react-bootstrap/Container";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          key: "1571481228138",
          text: "Get out of bed",
          isComplicated: false
        },
        {
          key: "1571481340223",
          text: "Brush teeth",
          isComplicated: false
        },
        {
          key: "1571481361254",
          text: "Eat breakfast",
          isComplicated: false
        }
      ],
      currentItem: { text: "", key: "", isComplicated: false }
    };
  }

  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem
    });
  };

  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: "", key: "" }
      });
    }
  };

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
  };

  toggleTodoComplete = key => {
    const temporaryItems = this.state.items.map(item => {
      if (item.key === key) item.isComplicated = !item.isComplicated;
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
          currentItem={this.state.currentItem}
        />
        <TodoItems
          entries={this.state.items}
          deleteItem={this.deleteItem}
          toggleTodoComplete={this.toggleTodoComplete}
        />
      </Container>
    );
  }
}

export default App;
