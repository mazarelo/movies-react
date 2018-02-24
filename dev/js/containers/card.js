import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    width: 345,
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

const SimpleMediaCard = (props) => {
  const { classes, item, clickCallback } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={item.images.fanart}
        title={item.title}
      />
      <CardContent>
        <Typography variant="headline" component="h2">
          {item.title}
        </Typography>
        <Typography component="p">
          extra 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Watch
        </Button>
        <Button size="small" color="primary" onClick={()=> clickCallback(item)}>
          Info
        </Button>
      </CardActions>
      </Card>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);