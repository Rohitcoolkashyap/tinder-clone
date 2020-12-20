import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    height: 630,
    // width: 740,
  },
  media: {
    height: 520,
    width: 500,
  },
});

export default function ProfileCard() {
  const classes = useStyles();
  var dataImage = localStorage.getItem('imgData');
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={dataImage ? dataImage : 'tinder-logo.png'}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            rohit
          </Typography>
          <Button size="medium" variant="contained" color="secondary">
            {dataImage ? 'change photo' : 'add photo'}
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
