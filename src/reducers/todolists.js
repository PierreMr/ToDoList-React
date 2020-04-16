const todolists = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODOLIST":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          todos: [],
        },
      ];
    case "REMOVE_TODOLIST":
      return [...state.filter((t) => t.id !== action.idToDoList)];
    case "ADD_TODO":
      return state.map((todolist) => {
        if (todolist.id === action.idToDoList) {
          todolist.todos = [
            ...todolist.todos,
            { id: action.id, title: action.title },
          ];
        }
        return todolist;
      });
    default:
      return state;
  }
};

export default todolists;
