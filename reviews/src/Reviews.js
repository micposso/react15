import React, { Component } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    avatar: {
      margin: "auto",
    },
  })
);

const Reviews = () => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <Avatar
        className={classes.avatar}
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue
        imperdiet lobortis. Etiam sit amet pulvinar diam. Integer imperdiet dui
        urna, consectetur feugiat tellus dictum nec. Nunc feugiat nec velit in
        ultrices. Duis sed tortor cursus, laoreet nibh a, fermentum eros.
        Praesent in eros sit amet tellus interdum suscipit. Praesent aliquam
        vestibulum pharetra. Quisque ut maximus nisl. Nullam iaculis lectus est,
        id lacinia odio euismod sed.
      </p>
      <Button variant="contained">Next</Button>
    </Paper>
  );
};

export default Reviews;
