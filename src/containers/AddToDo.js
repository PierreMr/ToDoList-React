import React from "react";
import { connect } from "react-redux";
import { addToDo } from "../actions";

const AddToDo = ({ dispatch, idToDoList }) => {
  let input;

  return (
    <div className="m-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addToDo({ title: input.value, idToDoList }));
          input.value = "";
        }}
      >
        <div className="input-group">
          <input ref={(node) => (input = node)} className="form-control" />
          <button type="submit" className="btn btn-primary btn-sm ml-1">
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect()(AddToDo);
