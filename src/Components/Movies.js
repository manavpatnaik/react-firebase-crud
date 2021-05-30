import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import firebaseDb from "../firebase";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  title: {
    marginTop: 30,
  },
  card: {
    padding: 30,
  },
});

const getMovies = async () => {
  const snapshot = await firebaseDb.collection("movies").get();
  let returnArr = [];
  await snapshot.forEach((doc) => {
    returnArr.push(doc);
  });
  returnArr = returnArr.map((movie) => {
    const obj = { ...movie.data(), id: movie.id };
    return obj;
  });
  return await returnArr;
};

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const newMovies = await getMovies();
    console.log(newMovies);
    setMovies(newMovies);
  }, []);

  const deleteMovie = (id) => {
    // console.log("Delete", id);
    firebaseDb.collection("movies").doc(id).delete();
    const newMovies = movies.filter((movie) => movie.id !== id);
    setMovies(newMovies);
  };

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
              <Movie movie={movie} deleteMovie={deleteMovie} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Movies;
