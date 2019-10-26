import React from "react";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default class EditTodo extends React.Component {
  render() {
    return (
      <InputGroup>
        <FormControl
          id={this.props.item.id}
          ref={this.props.item.inputElement}
          value={this.props.item.children}
          onChange={this.props.handleEdit}
          aria-label="new task"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
    );
  }
}
