import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import firebaseDb from "../firebase";

import firebase from "../firebase";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  title: {
    marginTop: 30,
  },
  card: {
    padding: 20,
  },
});

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    console.log(firebase);
    setMovies([]);
  }, []);

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h3" gutterBottom className={classes.title}>
        Movies
      </Typography>
      <Grid container>
        {movies.map((movie) => {
          return (
            <Grid
              item
              key={movie.id}
              xs={12}
              md={6}
              lg={4}
              className={classes.card}
            >
              <Movie movie={movie} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Movies;
