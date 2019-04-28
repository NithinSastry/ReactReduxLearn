import JSONApi from "../api";
export const fetchPosts = () => async dispatch => {
  const response = await JSONApi.get("/posts");
  dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data });
};
export const fetchUser = id => async dispatch => {
  const response = await JSONApi.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
