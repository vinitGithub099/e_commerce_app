import PropTypes from "prop-types";

export const userInitialState = {
  id: PropTypes.number,
  username: PropTypes.string,
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  gender: PropTypes.string,
  image: PropTypes.string,
  token: PropTypes.string,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "set_user_data":
      return {
        ...state,
        ...action.payload,
      };
    default:
      throw Error("userReducer error!");
  }
};
