export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER_SUCCESS":
      return [...state, action.payload];
    default:
      return state;
  }
};
