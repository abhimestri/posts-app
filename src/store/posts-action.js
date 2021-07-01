import { postsAction } from "./posts-slice";
import { useHttp } from "../hooks/use-http";
export const getPost = () => {
  return async (dispatch) => {
    const fetchPosts = await useHttp("GET");
    try {
      return dispatch(postsAction.readPosts(fetchPosts));
    } catch (err) {}
  };
};

export const createPost = (data) => {
  return async (dispatch) => {
    try {
      const response = await useHttp("POST", JSON.stringify(data));
      if (response) {
        alert("successfully Created!");
      }
    } catch (err) {}
  };
};

export const updatePost = (data) => {
  return async (dispatch) => {
    try {
      const response = await useHttp("PUT", JSON.stringify(data), data.id);
      if (response) {
        alert("successfully Updated!");
      }
    } catch (err) {}
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      const response = await useHttp("DELETE", null, id);
      if (response) {
        alert("successfully deleted!");
      }
    } catch (err) {
      alert("something went wrong!");
    }
  };
};
