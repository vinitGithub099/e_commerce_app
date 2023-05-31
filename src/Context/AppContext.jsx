import PropTypes from "prop-types";
import { createContext, useReducer } from "react";
import { productsReducer } from "../Reducers/reducer";
import { productsInitialState } from "./InitialStates";
export const AppContext = createContext(null);

export const AppContextProvider = (props) => {
  const { children } = props;
  const [productsState, productsDispatch] = useReducer(
    productsReducer,
    productsInitialState
  );
  return (
    <AppContext.Provider value={{ productsState, productsDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node,
};
