const todolists = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODOLIST":
      return [
        ...state,
        {
          id: action.id,
          title: action.title
        }
      ];
    default:
      return state;
  }
};

export default todolists;
