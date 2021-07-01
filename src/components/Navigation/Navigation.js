import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postsAction } from "../../store/posts-slice";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  position: {
    height: "auto",
    padding: "30px",
  },
}));
const SimpleBreadcrumbs = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const matches = useMediaQuery("(min-width:600px)");
  const searchHandler = (e) => {
    dispatch(postsAction.searchedPosts(e.target.value));
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={!matches ? 12 : 8}>
          <Breadcrumbs className={classes.position} aria-label="breadcrumb">
            <Link>
              <NavLink
                style={{ color: "black", textDecoration: "none" }}
                to="/"
              >
                Posts
              </NavLink>
            </Link>
            <Link>
              <NavLink
                style={{ color: "black", textDecoration: "none" }}
                to="/create-post"
              >
                Create Posts
              </NavLink>
            </Link>
            <Link>
              <NavLink
                style={{ color: "black", textDecoration: "none" }}
                to="/likedposts"
              >
                Liked Posts
              </NavLink>
            </Link>
            <Link>
              <NavLink
                style={{ color: "black", textDecoration: "none" }}
                to="/dislikedposts"
              >
                Disliked Posts
              </NavLink>
            </Link>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={!matches ? 12 : 4}>
          <div>
            <TextField
              id="standard-basic"
              style={{ width: "70%" }}
              label="search your posts..."
              onChange={searchHandler}
            />{" "}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SimpleBreadcrumbs;
