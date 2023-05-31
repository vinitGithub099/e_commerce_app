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

export const themeInitialState = {
  theme: "light",
};

export const productsInitialState = {
  products: [],
};
