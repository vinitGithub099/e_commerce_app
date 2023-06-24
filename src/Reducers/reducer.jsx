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
