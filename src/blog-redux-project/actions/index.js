import JSONApi from "../api";
export const fetchPosts = () => async dispatch => {
  const response = await JSONApi.get("/posts");
  dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data });
};
