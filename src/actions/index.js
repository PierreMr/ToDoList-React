let idToDoList = 0;

export const addToDoList = title => ({
  type: "ADD_TODOLIST",
  id: idToDoList++,
  title: capitalize(title)
});

export function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1, text.length).toLowerCase();
}
