import { Button, makeStyles, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { AddCircleOutline } from "@material-ui/icons";

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
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Add new Movie
      </Typography>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          className={classes.field}
          id="name"
          label="Name"
          variant="outlined"
          fullWidth
        />
        <TextField
          className={classes.field}
          id="year"
          label="Year"
          variant="outlined"
          fullWidth
        />
        <TextField
          className={classes.field}
          id="about"
          label="About"
          variant="outlined"
          fullWidth
        />
        <Button
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
