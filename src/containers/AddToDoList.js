import React from "react";
import { connect } from "react-redux";
import { addToDoList } from "../actions";

const AddToDoList = ({ dispatch }) => {
  let input;

  return (
    <div className="m-3">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addToDoList(input.value));
          input.value = "";
        }}
      >
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="input">
              Titre
            </span>
          </div>
          <input ref={node => (input = node)} className="form-control" />
          <button type="submit" className="btn btn-primary btn-sm ml-1">
            Add ToDoList
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect()(AddToDoList);
