import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Aos from "aos";
import "aos/dist/aos.css";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    padding: 20,
    marginBottom: 30,
    marginLeft: 20,
    height: 300,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();
  Aos.init({
    duration: 2000,
  });

  function FormRow(props) {
    return (
      <React.Fragment>
        <Grid item sm={12} xs={12} md={6} lg={4}>
          <Paper data-aos={"fade-up"} className={classes.paper}>
            <h1>{props.header}</h1>
            <p>{props.text}</p>

            <Button
              variant="contained"
              color="primary"
              href={props.link}
              target="_blank"
            >
              {props.btntext}
            </Button>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow
            header={"XOXO"}
            link={"https://github.com/denizmemduev/Tic-Tac-Toe"}
            text={
              "XOXO  is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a diagonal, horizontal, or vertical row is the winner. It is a solved game with a forced draw assuming best play from both players. "
            }
            btntext={"See Repository"}
          />

          <FormRow
            header={"TO-DO APP"}
            link={"https://github.com/denizmemduev/TodoApp"}
            text={
              "A list of the tasks that you have to do, or things that you want to do. "
            }
            btntext={"See Repository"}
          />

          <FormRow
            header={"FOOD BASKET"}
            link={"https://github.com/denizmemduev/FOOD-BASKET"}
            text={
              " Food basket is a web based application which serves to makeing a group food order. " 
            }
            btntext={"See Repository"}
          />

          <FormRow
            header={"STOCK MANAGER"}
            link={"https://github.com/denizmemduev/StockManager"}
            text={
              "StockManager is a simple desktop application for easy stock managment. "
            }
            btntext={"See Repository"}
          />

          <FormRow
            header={"INTERSHIP PROGRAM"}
            link={"https://github.com/denizmemduev/Internship-program-project"}
            text={
              ""
            }
            btntext={"See Repository"}
          />

          <FormRow
            header={"XOXO"}
            text={
              "XOXO  is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a diagonal, horizontal, or vertical row is the winner. It is a solved game with a forced draw assuming best play from both players. "
            }
            btntext={"See Repository"}
          />
        </Grid>
      </Grid>
    </div>
  );
}
