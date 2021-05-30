import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  centerAlign: {
    justifyContent: "center",
  },
});

export default function Movie({ movie }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.name} - {movie.year}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.about}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.centerAlign}>
        <Button size="small" color="secondary">
          Delete
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
