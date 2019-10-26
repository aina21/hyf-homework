import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
class TodoItems extends React.Component {
  createTasks = item => {
    return (
      <ListGroup.Item key={item.id}>
        <Form.Check
          id={item.id}
          onClick={() => this.props.toggleTodoComplete(item.id)}
          type="checkbox"
          label={`${item.description}||${item.deadline}`}
        />
        <Button variant="danger" onClick={() => this.props.deleteItem(item.id)}>
          Delete
        </Button>
      </ListGroup.Item>
    );
  };
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);
    if (listItems.length === 0) {
      return <ListGroup>{"No Items"}</ListGroup>;
    } else {
      return <ListGroup>{listItems}</ListGroup>;
    }
  }
}
export default TodoItems;
