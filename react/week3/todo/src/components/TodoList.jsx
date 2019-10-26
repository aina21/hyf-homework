import React from "react";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.addItem}>
          <InputGroup className="mb-3">
            <FormControl
              ref={this.props.inputElement}
              value={this.props.currentItem.description}
              onChange={this.props.handleInput}
              aria-label="new task"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <DatePicker
                selected={this.props.currentItem.deadline}
                onSelect={this.props.handleSelectDate}
                onChange={this.props.handleChangeDate}
              />
              <Button
                variant="outline-secondary"
                // disabled={!this.props.currentItem.description}
                type="submit"
              >
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
