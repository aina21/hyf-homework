import React from "react";
import ReactDOM from "react-dom";

class TodoList extends React.Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="todoListHeader">
          <form onSubmit>
            <input />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
