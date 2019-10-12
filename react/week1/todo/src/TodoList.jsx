import React from "react";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.addItem}>
          <InputGroup className="mb-3">
            <FormControl
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
              aria-label="new task"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" type="submit">
                Add Task
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </div>
    );
  }
}

export default TodoList;
