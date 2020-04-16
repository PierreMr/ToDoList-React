import React from "react";
import ToDoList from "./ToDoList";
import { connect } from "react-redux";

const ToDoLists = ({ todolists }) => {
  return (
    <div className="row justify-content-around">
      {todolists.map((todolist) => (
        <ToDoList key={todolist.id} {...todolist} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todolists: state.todolists,
  };
};

export default connect(mapStateToProps)(ToDoLists);
