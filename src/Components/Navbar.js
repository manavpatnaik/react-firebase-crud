import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import MovieIcon from "@material-ui/icons/Movie";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MovieIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Movies
          </Typography>
          <Link to="/" className={classes.link}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/movies" className={classes.link}>
            <Button color="inherit">Movies</Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
