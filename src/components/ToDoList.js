import React from "react";
import style from "./ToDoList.module.css";
import AddToDo from "./../containers/AddToDo";
import RemoveToDoList from "./../containers/RemoveToDoList";
import ToDo from "./ToDo";

const ToDoList = (todolist) => {
  return (
    <div className={`card col-3 m-3 ${style.card_custom} shadow-lg`}>
      <div className="card-body">
        <h2 className={`card-title ${style.title}`}>{todolist.title}</h2>
        <AddToDo idToDoList={todolist.id} />
        <ul className="list-group list-group-flush">
          {todolist.todos.map((todo) => (
            <ToDo key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
      <div className="card-footer">
        <RemoveToDoList idToDoList={todolist.id} />
      </div>
    </div>
  );
};

export default ToDoList;
