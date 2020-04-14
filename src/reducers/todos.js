const mockToDos = [
  {
    id: 1,
    title: "Title 1",
    idToDoList: 1
  }
];

const todos = (state = mockToDos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          idToDoList: action.idToDoList
        }
      ];
    default:
      return state;
  }
};

export default todos;
