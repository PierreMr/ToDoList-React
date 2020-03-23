import React from "react";
import ToDoList from "./ToDoList";

const todolists = [];

for (let i = 0; i < 5; i++) {
  todolists.push(<ToDoList key={i} />);
}

const ToDoLists = () => <div className="row">{todolists}</div>;

export default ToDoLists;
