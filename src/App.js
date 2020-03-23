import React from "react";
import "./App.css";
import Header from "./components/Header";
import AddToDoList from "./containers/AddToDoList";
import ToDoLists from "./components/ToDoLists";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddToDoList />
        <ToDoLists />
      </div>
    </div>
  );
}

export default App;
