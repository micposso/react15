import React, { useState } from 'react';
import { createStyles, Theme, makeStyles  } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Tour = ({id, image, info, price, name}) => {

  const [readMore, setReadMore] = useState(false);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {readMore ? info : `${info.substring(0,200)}...`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Chip label={"$" + price} />
        <Button size="small" color="primary" onClick={() => setReadMore(!readMore)}>
          {readMore ? 'show less' : 'read more'}
        </Button>
        <Button size="small" color="primary">
         Not Interested
        </Button>
      </CardActions>
    </Card>
  );
};

export default Tour;