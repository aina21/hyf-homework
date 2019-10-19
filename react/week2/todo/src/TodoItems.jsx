import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
class TodoItems extends React.Component {
  createTasks = item => {
    return (
      <ListGroup.Item>
        <Form.Check
          key={item.key}
          onClick={() => this.props.toggleTodoComplete(item.key)}
          type="checkbox"
          label={item.text}
        />
        <Button
          variant="danger"
          onClick={() => this.props.deleteItem(item.key)}
        >
          Delete
        </Button>
      </ListGroup.Item>
    );
  };
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);
    console.log(listItems);
    if (listItems.length === 0) {
      return <ListGroup>{"No Items"}</ListGroup>;
    } else {
      return <ListGroup>{listItems}</ListGroup>;
    }
  }
}
export default TodoItems;
