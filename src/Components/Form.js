import { Button, makeStyles, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { AddCircleOutline } from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    textAlign: "center",
  },
  form: {
    padding: theme.spacing(4),
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
}));

const Form = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [about, setAbout] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, year, about);
    setName("");
    setYear("");
    setAbout("");
    history.push("/movies");
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Add new Movie
      </Typography>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          onChange={(e) => setName(e.target.value)}
          className={classes.field}
          id="name"
          label="Name"
          variant="outlined"
          value={name}
          fullWidth
        />
        <TextField
          onChange={(e) => setYear(e.target.value)}
          className={classes.field}
          id="year"
          label="Year"
          variant="outlined"
          value={year}
          fullWidth
        />
        <TextField
          onChange={(e) => setAbout(e.target.value)}
          className={classes.field}
          id="about"
          label="About"
          variant="outlined"
          value={about}
          fullWidth
        />
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          size="large"
          endIcon={<AddCircleOutline />}
        >
          Add Movie
        </Button>
      </form>
    </div>
  );
};

export default Form;
