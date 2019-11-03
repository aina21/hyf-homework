import React, { Component } from "react";
import { UserContext } from "./UserProvider";

class User extends Component {
  render() {
    return (
      <div>
        <UserContext.Consumer>
          {value => {
            if (value.state.isLoading) {
              return <p>loading</p>;
            } else if (value.state.isEmpty) {
              return <p>No Result</p>;
            } else {
              return (
                <ul>
                  {value.state.users.map(user => (
                    <li key={user.id}>{user.username}</li>
                  ))}
                </ul>
              );
            }
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default User;
