import PropTypes from "prop-types";
import { createContext } from "react";

export const AppContext = createContext(null);

const userInitialState = {
  id: PropTypes.number,
  username: PropTypes.string,
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  gender: PropTypes.string,
  image: PropTypes.string,
  token: PropTypes.string,
};

export const AppContextProvider = (props) => {
  const { children } = props;
  return (
    <AppContext.Provider value={{ userInitialState }}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node,
};
