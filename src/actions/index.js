let idToDoList = 1;
let idToDo = 2;

export const addToDoList = title => ({
  type: "ADD_TODOLIST",
  id: idToDoList++,
  title: capitalize(title),
  todos: []
});

export const addToDo = ({ title, idToDoList }) => ({
  type: "ADD_TODO",
  id: idToDo++,
  title: capitalize(title),
  idToDoList
});

export function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1, text.length).toLowerCase();
}
