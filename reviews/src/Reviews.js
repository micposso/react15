import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import people from "./data";

import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

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
    navigation: {
      display: "flex",
      justifyContent: "center",
    },
  })
);

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const classes = useStyles();

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prePerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    setIndex((index) => {
      let randomNumber = Math.floor(Math.random() * people.length);
      if(randomNumber === index) {
        randomNumber = index + 1;
      }
      setIndex(checkNumber(randomNumber));
    })
  };

  return (
    <Paper elevation={3} className={classes.paper}>
      <Avatar className={classes.avatar} alt={name} src={image} />
      <h2>{name}</h2>
      <h4>{job}</h4>
      <p>{text}</p>
      <Box m="2rem">
        <Button
          onClick={() => randomPerson()}
          variant="contained"
          color="secondary"
        >
          Surprise me!
        </Button>
      </Box>

      <Grid container className={classes.navigation}>
        <Grid item>
          <IconButton aria-label="delete" onClick={() => prePerson()}>
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => nextPerson()}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Reviews;
