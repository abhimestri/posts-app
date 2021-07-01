import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsAction } from "../../../store/posts-slice";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { deletePost } from "../../../store/posts-action";
import { useHistory } from "react-router";
import SearchedListItem from "./container/searchedList";
import LocalListItem from "./container/localList";

const useStyles = makeStyles((theme) => ({
  listItem: {
    height: "auto",
    width: "100%",
    padding: "40px 10px 40px 10px",
    marginBottom: "20px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
  },
  iconBox: {
    width: "250px",
  },
  iconBoxFull: {
    width: "250px",
    marginTop: "30px",
  },
  list: {
    marginTop: "30px",
  },
}));

const PostPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const fetchedPosts = useSelector((state) => state.localPosts);
  const searchPosts = useSelector((state) => state.searchPosts);

  const editHandler = (id, post) => {
    history.push({
      pathname: `/editpost/${id}`,
      post,
    });
  };

  const likeEditHandlerLocal = (post) => {
    dispatch(postsAction.likePost(post));
  };

  const dislikeEditHandlerLocal = (post) => {
    dispatch(postsAction.dislikePost(post));
  };

  const likeEditHandlerSearch = (post) => {
    dispatch(postsAction.likePostFromSearch(post));
  };

  const dislikeEditHandlerSearch = (post) => {
    dispatch(postsAction.dislikePostFromSearch(post));
  };

  const deletePostHandler = (id) => {
    dispatch(deletePost(id));
  };

  let res;
  if (searchPosts.length !== 0) {
    res =
      searchPosts &&
      searchPosts.map((el, i) => (
        <SearchedListItem
          el={el}
          i={i}
          editHandler={editHandler}
          deletePostHandler={deletePostHandler}
          likeEditHandlerSearch={likeEditHandlerSearch}
          dislikeEditHandlerSearch={dislikeEditHandlerSearch}
        />
      ));
  } else {
    res =
      fetchedPosts &&
      fetchedPosts.map((el, i) => (
        <LocalListItem
          el={el}
          i={i}
          editHandler={editHandler}
          deletePostHandler={deletePostHandler}
          likeEditHandlerLocal={likeEditHandlerLocal}
          dislikeEditHandlerLocal={dislikeEditHandlerLocal}
        />
      ));
  }
  return (
    <Container>
      <List className={classes.list}>{res}</List>
    </Container>
  );
};

export default PostPage;
