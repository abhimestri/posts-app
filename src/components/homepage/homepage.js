import React from "react";
import PostPage from "./pages/postsPage";
import CreatePost from "./pages/createPost";
import EditPostPage from "./pages/editPostPage";
import LikedPostPage from "./pages/likedPostsPage";
import DislikedPostsPage from "./pages/dislikedPostsPage";
import NavBar from "../Navigation/Navigation";
import { Route } from "react-router";

const Homepage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Route path="/" exact>
        <PostPage />
      </Route>
      <Route path="/create-post" exact>
        <CreatePost />
      </Route>
      <Route path="/editpost/:id" exact>
        <EditPostPage />
      </Route>
      <Route path="/likedposts" exact>
        <LikedPostPage />
      </Route>
      <Route path="/dislikedposts" exact>
        <DislikedPostsPage />
      </Route>
    </React.Fragment>
  );
};

export default Homepage;
