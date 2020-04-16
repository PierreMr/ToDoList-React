import React from "react";
import { connect } from "react-redux";
import { removeToDoList } from "../actions";

const RemoveToDoList = ({ dispatch, idToDoList }) => {
  return (
    <div className="m-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(removeToDoList(idToDoList));
        }}
      >
        <button type="submit" className="btn btn-primary btn-sm ml-1">
          Remove ToDoList
        </button>
      </form>
    </div>
  );
};

export default connect()(RemoveToDoList);
