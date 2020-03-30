import React from "react";
import style from "./ToDoList.module.css";
import AddToDo from "./../containers/AddToDo";
import ToDo from "./ToDo";
import { connect } from "react-redux";

const ToDoList = todolist => {
  console.log(todolist);

  return (
    <div className={`card col-3 m-3 ${style.card_custom} shadow-lg`}>
      <div className="card-body">
        <h2 className={`card-title ${style.title}`}>{todolist.title}</h2>
        <ul className="list-group list-group-flush">
          {todolist.todos
            .filter(t => t.idToDoList === todolist.id)
            .map(todo => (
              <ToDo key={todo.id} {...todo} />
            ))}
        </ul>
        <AddToDo idToDoList={todolist.id} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(ToDoList);
