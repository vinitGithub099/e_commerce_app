import { useReducer } from "react";
import { productsInitialState, productsReducer } from "../Features/Products";
import { userInitialState, userReducer } from "../Features/Users";

export function useConnect() {
  const [productsState, productsDispatch] = useReducer(
    productsReducer,
    productsInitialState
  );

  const [usersState, usersDispatch] = useReducer(userReducer, userInitialState);

  const state = {
    products: productsState,
    user: usersState,
  };

  const dispatchActions = {
    dispatchProduct: productsDispatch,
    dispatchUser: usersDispatch,
  };

  return [state, dispatchActions];
}
