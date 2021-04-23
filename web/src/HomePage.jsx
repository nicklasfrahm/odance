import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  div: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <Typography variant="h1">O!Dance</Typography>
      <Typography variant="h5">Coming soon!</Typography>
    </div>
  );
};

export default App;
