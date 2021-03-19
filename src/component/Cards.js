import React from 'react'
import './Card.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
const useStyles = makeStyles({
  root: {
    maxWidth: 500, 
  },
  media: {
    height: 340,
  },
});


export const Cards = () => {
  const classes = useStyles();
    return (
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/6773313/pexels-photo-6773313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"  className='cards__name'>
            Abhishek
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button variant="contained" size="small" color="default" startIcon={<CloudUploadIcon />}>
          Share
        </Button> */}
        <Button 
          variant="contained"
          color="default"
          startIcon={<SendIcon />}
          className='button'
        >Know More</Button>

        {/* <Button
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      ></Button> */}
        {/* <Button variant="outlined" size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
    )
}
