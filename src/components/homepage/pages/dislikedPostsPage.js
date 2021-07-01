import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsAction } from "../../../store/posts-slice";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  listItem: {
    height: "120px",
    marginBottom: "20px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
  },
  list: {
    marginTop: "30px",
  },
  message: {
    fontSize: "28px",
    fontWeight: "200",
    color: "#333",
    margin: "auto",
    textAlign: "center",
  },
}));

const DislikedPostPage = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.dislikedPost);
  const dispatch = useDispatch();
  const removeFromDislikedHandler = (id) => {
    dispatch(postsAction.removeFromDislike(id));
  };
  let res;
  if (posts.length !== 0) {
    res =
      posts &&
      posts.map((el, i) => (
        <ListItem className={classes.listItem}>
          <ListItemIcon>
            <ListItemText primary={i + 1} />
          </ListItemIcon>
          <ListItemText primary={el.title} />
          <ListItemSecondaryAction>
            <Box>
              <IconButton
                edge="end"
                style={{ marginLeft: "5px" }}
                aria-label="delete"
                onClick={() => removeFromDislikedHandler(el.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </ListItemSecondaryAction>
        </ListItem>
      ));
  } else {
    res = (
      <div className={classes.message}>
        <p>No any Disliked Posts</p>
      </div>
    );
  }
  return (
    <Container>
      <List className={classes.list}>{res}</List>
    </Container>
  );
};

export default DislikedPostPage;
