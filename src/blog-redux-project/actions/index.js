import _ from "lodash";
import JSONApi from "../api";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach(userId => dispatch(fetchUser(userId)));
};

export const fetchPosts = () => async dispatch => {
  const response = await JSONApi.get("/posts");
  dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data });
};
export const fetchUser = id => async dispatch => {
  const response = await JSONApi.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER_SUCCESS", payload: response.data });
};
