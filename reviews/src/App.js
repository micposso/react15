import Reviews from "./Reviews";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Avatar from '@material-ui/core/Avatar';


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
    headline: {
      textAlign: "center"
    }
  })
);

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm" fixed>
        <Grid item xs={12}>
          <h1 className={classes.headline}>Product Reviews</h1>
          <Reviews />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
