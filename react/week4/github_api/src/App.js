import React from "react";
import "./App.css";
import UserProvider from "./components/UserProvider";
import User from "./components/User";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <SearchBox></SearchBox>
        <User></User>
      </UserProvider>
    </div>
  );
}

export default App;
