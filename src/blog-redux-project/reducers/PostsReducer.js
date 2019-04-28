export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};
