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

export const themeReducer = (state, action) => {
  switch (action.type) {
    case "dark_theme":
      return {
        ...state,
        theme: "dark",
      };
    case "light_theme":
      return {
        ...state,
        theme: "light",
      };
    default:
      throw Error("themeReducer error!");
  }
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case "set_products":
      return {
        ...state,
        products: action.payload,
      };
    default:
      throw Error("productsReducer error!");
  }
};
