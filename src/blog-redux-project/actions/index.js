import _ from "lodash";
import JSONApi from "../api";
export const fetchPosts = () => async dispatch => {
  const response = await JSONApi.get("/posts");
  dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data });
};
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await JSONApi.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER_SUCCESS", payload: response.data });
});
