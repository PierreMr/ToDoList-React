import { combineReducers } from "redux";
import todolists from "./todolists";
import todos from "./todos";

export default combineReducers({
  todolists,
  todos
});
