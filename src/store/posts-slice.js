import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchedPosts: [],
  localPosts: [],
  likedPost: [],
  dislikedPost: [],
  temp: [],
  searchPosts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    readPosts(state, action) {
      state.fetchedPosts = action.payload.map((el) => {
        return {
          ...el,
          liked: false,
          disliked: false,
        };
      });
      state.localPosts = action.payload.map((el) => {
        return {
          ...el,
          liked: false,
          disliked: false,
        };
      });
      state.temp = state.localPosts;
    },
    createPost(state, action) {
      let post = {
        title: action.payload.title,
        body: action.payload.body,
      };
      state.localPost = state.localPost.concat(post);
    },
    likePostFromSearch(state, action) {
      let searchpostindex = state.searchPosts.findIndex((el) => {
        return el.id === action.payload.id;
      });
      if (state.searchPosts[searchpostindex].liked) {
        state.searchPosts[searchpostindex].liked = false;
        state.localPosts = state.localPosts.map((el) => {
          if (el.id === action.payload.id) {
            el.liked = false;
            return el;
          }
          return el;
        });
        state.fetchedPosts = state.localPosts;
        state.likedPost = state.likedPost.filter(
          (el) => el.id !== action.payload.id
        );
      } else {
        state.searchPosts[searchpostindex].liked = true;
        state.searchPosts[searchpostindex].disliked = false;
        state.localPosts = state.localPosts.map((el) => {
          if (el.id === action.payload.id) {
            el.liked = true;
            el.disliked = false;
            return el;
          }
          return el;
        });
        state.fetchedPosts = state.localPosts;
        state.likedPost = state.likedPost.concat(action.payload);
        state.dislikedPost = state.dislikedPost.filter(
          (el) => el.id !== action.payload.id
        );
      }
    },
    dislikePostFromSearch(state, action) {
      let searchpostindex = state.searchPosts.findIndex((el) => {
        return el.id === action.payload.id;
      });
      if (state.searchPosts[searchpostindex].disliked) {
        state.searchPosts[searchpostindex].disliked = false;
        state.localPosts = state.localPosts.map((el) => {
          if (el.id === action.payload.id) {
            el.disliked = false;
            return el;
          }
          return el;
        });
        state.fetchedPosts = state.localPosts;
        state.dislikedPost = state.dislikedPost.filter(
          (el) => el.id !== action.payload.id
        );
      } else {
        state.searchPosts[searchpostindex].disliked = true;
        state.searchPosts[searchpostindex].liked = false;
        state.localPosts = state.localPosts.map((el) => {
          if (el.id === action.payload.id) {
            el.liked = false;
            el.disliked = true;
            return el;
          }
          return el;
        });
        state.fetchedPosts = state.localPosts;
        state.dislikedPost = state.dislikedPost.concat(action.payload);
        state.likedPost = state.likedPost.filter(
          (el) => el.id !== action.payload.id
        );
      }
    },
    likePost(state, action) {
      let postindex = state.localPosts.findIndex(
        (el) => el.id === action.payload.id
      );
      if (state.localPosts[postindex].liked) {
        state.localPosts[postindex].liked = false;
        state.fetchedPosts = state.localPosts;
        state.likedPost = state.likedPost.filter(
          (el) => el.id !== action.payload.id
        );
      } else {
        state.localPosts[postindex].liked = true;
        state.localPosts[postindex].disliked = false;
        state.fetchedPosts = state.localPosts;
        state.likedPost = state.likedPost.concat(action.payload);
        state.dislikedPost = state.dislikedPost.filter(
          (el) => el.id !== action.payload.id
        );
      }
    },
    dislikePost(state, action) {
      let postindex = state.localPosts.findIndex((el) => {
        return el.id === action.payload.id;
      });
      if (state.localPosts[postindex].disliked) {
        state.localPosts[postindex].disliked = false;
        state.dislikedPost = state.dislikedPost.filter(
          (el) => el.id !== action.payload.id
        );
        state.temp = state.localPosts;
      } else {
        state.localPosts[postindex].liked = false;
        state.localPosts[postindex].disliked = true;
        state.dislikedPost = state.dislikedPost.concat(action.payload);
        state.likedPost = state.likedPost.filter(
          (el) => el.id !== action.payload.id
        );
        state.temp = state.localPosts;
      }
      state.temp = state.localPosts;
    },
    searchedPosts(state, action) {
      state.searchPosts = state.fetchedPosts.filter((el) => {
        if (action.payload === "") {
          return true;
        } else {
          return el.title
            .toString()
            .toLowerCase()
            .includes(action.payload.toString().toLowerCase());
        }
      });
    },
    removeFromlike(state, action) {
      let postindex = state.localPosts.findIndex(
        (el) => el.id === action.payload
      );
      if (state.searchPosts.length !== 0) {
        let searchpostindex = state.searchPosts.findIndex(
          (el) => el.id === action.payload
        );
        state.searchPosts[searchpostindex].liked = false;
      }
      state.fetchedPosts[postindex].liked = false;
      state.localPosts[postindex].liked = false;
      state.likedPost = state.likedPost.filter(
        (el) => el.id !== action.payload
      );
    },
    removeFromDislike(state, action) {
      let postindex = state.localPosts.findIndex(
        (el) => el.id === action.payload
      );
      if (state.searchPosts.length !== 0) {
        let searchpostindex = state.searchPosts.findIndex(
          (el) => el.id === action.payload
        );
        state.searchPosts[searchpostindex].disliked = false;
      }
      state.fetchedPosts[postindex].disliked = false;
      state.localPosts[postindex].disliked = false;
      state.dislikedPost = state.dislikedPost.filter(
        (el) => el.id !== action.payload
      );
    },
  },
});

export const postsAction = postSlice.actions;
export default postSlice;
