import React from "react";

import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

import EditTodo from "./EditTodo";
class TodoItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showEdit: false };
    this.toggleEdit = this.toggleEdit.bind(this);
  }
  toggleEdit = () => {
    const { showEdit } = this.state;
    this.setState({ showEdit: !showEdit });
  };
  createTasks = item => {
    return (
      <ListGroup.Item key={item.id}>
        <Form.Check
          id={item.id}
          onClick={() => this.props.toggleTodoComplete(item.id)}
          type="checkbox"
          label={`${item.description} || ${item.deadline}`}
        />
        <Button variant="info" onClick={this.toggleEdit}>
          Edit
        </Button>
        {this.state.showEdit && <EditTodo 
        item={item}
        handleEdit= {this.props.handleEdit.bind(this,item.id)}
        ></EditTodo>}
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
