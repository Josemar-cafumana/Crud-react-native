import React, { createContext, useReducer } from "react";
import users from "../data/users";
import { actions } from "./Actions";

const initialState = { users };
const UsersContext = createContext({});

export const UsersProvider = (props) => {
  const reducer = (state, action) => {
    const fn = actions[action.type];
    return fn ? fn(state, action) : state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};
export default UsersContext;
