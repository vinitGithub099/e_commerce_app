export const userReducer = (state, action) => {
  switch (action.type) {
    case "set_user_data":
      return {
        state,
        ...action.payload,
      };
    default:
      throw Error("userReducer error!");
  }
};
