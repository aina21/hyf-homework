import React from "react";
import "./App.css";
import UserProvider from "./components/UserProvider";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <User></User>
      </UserProvider>
    </div>
  );
}

export default App;
