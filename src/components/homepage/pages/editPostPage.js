import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { updatePost } from "../../../store/posts-action";
import { useDispatch } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import { useLocation } from "react-router";

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
  subHeader: {
    fontSize: "14px",
  },
  button: {
    color: "#333",
    height: "50px",
    margin: "20px",
    marginLeft: "0",
  },
}));
const EditPostPage = (props) => {
  const [showStatus, setShowStatus] = useState();
  const location = useLocation();
  const classes = useStyles();
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [locationTitle, setLocationTitle] = useState(location.post.title);
  const [locationBody, setLocationBody] = useState(location.post.body);

  const dispatch = useDispatch();
  const formHandler = () => {
    if ((title && body) || (locationTitle && locationBody)) {
      dispatch(
        updatePost({
          title,
          body,
          id: location.pathname.toString().split("/")[2],
        })
      );
      setShowStatus(
        <Container maxWidth="sm">
          <Alert severity="success">Post created successfully!</Alert>
        </Container>
      );
      setTitle("");
      setBody("");
      setLocationTitle("");
      setLocationBody("");
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
    setTimeout(() => {
      setShowStatus("");
    }, 6000);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyInput = (e) => {
    setBody(e.target.value);
  };
  const clearInputHandler = () => {
    setBody("");
    setTitle("");
    setLocationTitle("");
    setLocationBody("");
  };

  return (
    <React.Fragment>
      {showStatus}{" "}
      <Container maxWidth="sm" className={classes.outline}>
        <p className={classes.header}>Edit post</p>
        <p className={classes.subHeader}>
          id:{location.pathname.toString().split("/")[2]}
        </p>
        <TextField
          type="text"
          className={classes.title}
          label="Title"
          value={title === null ? (location ? locationTitle : "") : title}
          onChange={handleTitle}
        />
        <div style={{ height: "10px" }}></div>
        <TextField
          type="text"
          onChange={handleBodyInput}
          className={classes.bodyForm}
          label="Body"
          value={body === null ? (location ? locationBody : "") : body}
        />
        <div style={{ height: "40px" }}></div>
        <Button className={classes.button} onClick={formHandler}>
          Edit Post
        </Button>
        <Button className={classes.button} onClick={clearInputHandler}>
          Clear entry
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default EditPostPage;
