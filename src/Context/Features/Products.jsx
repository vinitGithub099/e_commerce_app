export const productsInitialState = {
  products: [],
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
