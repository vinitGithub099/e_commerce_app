import PropTypes from "prop-types";
import { createContext } from "react";
import { useConnect } from "./Store/Store";
export const AppContext = createContext(null);

export const AppContextProvider = (props) => {
  const { children } = props;
  const [state, dispatchActions] = useConnect();
  return (
    <AppContext.Provider value={{ state, dispatchActions }}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node,
};
