import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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

const LocalListItem = (props) => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <ListItem className={classes.listItem}>
      <ListItemIcon>
        <ListItemText primary={props.i + 1} />
      </ListItemIcon>
      <p style={{ width: "80%" }}>{props.el.title}</p>
      <Box className={matches ? classes.iconBox : classes.iconBoxFull}>
        <IconButton
          edge="end"
          style={{ marginRight: "10px" }}
          aria-label="edit"
          onClick={() => props.likeEditHandlerLocal(props.el)}
        >
          {props.el.liked ? (
            <ThumbUpIcon style={{ color: "blue" }} />
          ) : (
            <ThumbUpIcon />
          )}
        </IconButton>
        <IconButton
          edge="end"
          style={{ marginRight: "10px" }}
          aria-label="edit"
          onClick={() => props.dislikeEditHandlerLocal(props.el)}
        >
          {props.el.disliked ? (
            <ThumbDownIcon style={{ color: "blue" }} />
          ) : (
            <ThumbDownIcon />
          )}
        </IconButton>
        <IconButton
          edge="end"
          style={{ marginRight: "10px" }}
          aria-label="edit"
          onClick={() =>
            props.editHandler(props.el.id, {
              title: props.el.title,
              body: props.el.body,
            })
          }
        >
          <EditIcon />
        </IconButton>
        <IconButton
          edge="end"
          style={{ marginLeft: "5px" }}
          aria-label="delete"
          onClick={() => props.deletePostHandler(props.el.id)}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default LocalListItem;
