import React from "react";
import ToDoList from "./ToDoList";
import { connect } from "react-redux";

const ToDoLists = state => (
  <div className="row todolists">
    {state.todolists.map(todolist => (
      <ToDoList key={todolist.id} {...todolist} />
    ))}
  </div>
);

const mapStateToProps = state => {
  return {
    todolists: state.todolists,
    todos: state.todos
  };
};

export default connect(mapStateToProps)(ToDoLists);
