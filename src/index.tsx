import * as React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { useDispatch, useSelector, Provider } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import PlusOneIcon from "@material-ui/icons/PlusOne";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import "./styles.css";

function counter(state = 0, action: { type: any }) {
  switch (action.type) {
    case "INCREMENT":
      state = state + 1;
      return state;
    case "DECREMENT":
      state = state - 1;
      return state;
    default:
      return state;
  }
}

let store = createStore(counter);
store.subscribe(() => console.log(store.getState()));

type DotProps = {
  color: string;
};

const IncrementerButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch({ type: "INCREMENT" })}
      variant="contained"
      color="secondary"
    >
      Add +1
    </Button>
  );
};

const DecrementButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch({ type: "DECREMENT" })}
      variant="contained"
      color="primary"
    >
      Sub -1
    </Button>
  );
};

const Counter = ({ color }: DotProps) => {
  const counter: number = useSelector(state => state);

  return (
    <Badge color="primary" badgeContent={counter}>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Everything counts in large amounts.
      </Typography>
    </Badge>
  );
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Codeways
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PlusOneIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Adding and subtracting with React
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Reduxer Playground
            </Typography>
            <Counter />
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <IncrementerButton>Add +1</IncrementerButton>
                </Grid>
                <Grid item>
                  <DecrementButton>Sub -1</DecrementButton>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Such state, much wow!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          It's a competitive world.
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

function App() {
  return (
    <div className="App">
      <Album />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
