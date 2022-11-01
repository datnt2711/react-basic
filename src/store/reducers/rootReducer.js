const initState = {
  users: [
    { id: 1, name: "Dat" },
    { id: 2, name: "Dat eiii" },
    { id: 3, name: "ReactJS co ban with Dat eiii" },
  ],
  posts: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      console.log(">>> run into delete user ", action);
      let users = state.users;
      let newUsers = users.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        users: newUsers,
      };

    case "CREATE_USER":
      let id = Math.floor(Math.random() * 101);
      let user = {
        id: id,
        name: `random - ${id} `,
      };
      return {
        ...state,
        users: [...state.users, user],
      };
    default:
      return state;
  }
};
export default rootReducer;
