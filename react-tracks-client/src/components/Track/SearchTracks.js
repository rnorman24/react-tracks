import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import ClearIcon from "@material-ui/icons/Clear";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const SearchTracks = ({ classes }) => {
  return (
    <form>
      <Paper className={classes.root} elevation={1}>
        <IconButton>
          <ClearIcon />
        </IconButton>
        <TextField 
          fullWidth
          placeholder='Search All Tracks'
          InputProps={{
            disableUnderline: true
          }}
        />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Paper>
    </form>
  )
};

const styles = theme => ({
  root: {
    padding: "2px 4px",
    margin: theme.spacing.unit,
    display: "flex",
    alignItems: "center"
  }
});

export default withStyles(styles)(SearchTracks);
