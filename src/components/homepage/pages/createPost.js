import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { createPost } from "../../../store/posts-action";
import { useDispatch } from "react-redux";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  title: {
    width: "100%",
  },
  bodyForm: {
    width: "100%",
  },
  outline: {
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
    paddingTop: "20px",
    marginTop: "10vh",
  },
  header: {
    fontSize: "20px",
    marginTop: "20px",
  },
  button: {
    color: "#333",
    height: "50px",
    margin: "20px",
    marginLeft: "0",
  },
}));
const CreatePage = () => {
  const [showStatus, setShowStatus] = useState();
  //   const posts = useSelector((state) => state.localPost);
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const formHandler = () => {
    if (title && body) {
      dispatch(createPost({ title, body, id: Math.random() }));
      setShowStatus(
        <Container maxWidth="sm">
          <Alert severity="success">Post created successfully!</Alert>
        </Container>
      );
      setTitle("");
      setBody("");
      setTimeout(() => {
        setShowStatus("");
      }, 6000);
    } else {
      if (!title) {
        setShowStatus(
          <Container maxWidth="sm">
            <Alert severity="error">Title can't be empty!</Alert>
          </Container>
        );
      } else {
        setShowStatus(
          <Container maxWidth="sm">
            <Alert severity="error">body can't be empty!</Alert>
          </Container>
        );
      }
    }
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyInput = (e) => {
    setBody(e.target.value);
  };

  return (
    <React.Fragment>
      {showStatus}{" "}
      <Container maxWidth="sm" className={classes.outline}>
        <p className={classes.header}>Creat a post</p>
        <TextField
          type="text"
          className={classes.title}
          onChange={handleTitle}
          label="Title"
          value={title}
        />
        <div style={{ height: "10px" }}></div>
        <TextField
          type="text"
          onChange={handleBodyInput}
          className={classes.bodyForm}
          label="Body"
          value={body}
        />
        <div style={{ height: "40px" }}></div>
        <Button className={classes.button} onClick={formHandler}>
          Create Post
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default CreatePage;
