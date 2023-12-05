export const actions = {
  createUser(state, action) {
    const user = action.payload;
    user.id = Math.random();

    return {
      ...state,
      users: [...state.users, user],
    };
  },
  updateUser(state, action) {
    const user = action.payload;

    return {
      ...state,
      users: state.users.map((u) => (u.id === user.id ? user : u)),
    };
  },
  deleteUser(state, action) {
    const user = action.payload;

    return {
      ...state,
      users: state.users.filter((u) => u.id !== user.id),
    };
  },
};
