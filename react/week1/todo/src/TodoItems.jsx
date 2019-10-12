import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

class TodoItems extends React.Component {
  createTasks = item => {
    return (
      <ListGroup.Item
        key={item.key}
        onClick={() => this.props.deleteItem(item.key)}
      >
        {item.text}
      </ListGroup.Item>
    );
  };
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);
    return <ListGroup>{listItems}</ListGroup>;
  }
}
export default TodoItems;
