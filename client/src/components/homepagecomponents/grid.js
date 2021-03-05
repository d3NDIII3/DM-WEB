import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import LinkIcon from "@material-ui/icons/Link";

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
    height: 250,
    fontSize: 15,
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
            <h2>{props.header}</h2>
            <p>{props.text}</p>

            <Button
              variant="contained"
              color="default"
              href={props.link}
              target="_blank"
            >
              <LinkIcon style={{ margin: 5 }}> </LinkIcon>
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
            header={"XOXO - Created with JQuery"}
            link={"https://github.com/denizmemduev/Tic-Tac-Toe"}
            text={
              "XOXO  is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid.  "
            }
            btntext={"See Repository"}
          />

          <FormRow
            header={"TO-DO APP - Created with Angular TypeScript"}
            link={"https://github.com/denizmemduev/Todo-app"}
            text={
              "A list of the tasks that you have to do, or things that you want to do. "
            }
            btntext={"See Repository"}
          />

          <FormRow
            header={"FOOD BASKET - Created with React JS, Node JS and Firebase"}
            link={"https://github.com/denizmemduev/FOOD-BASKET"}
            text={
              " Food basket is a web based application which serves to makeing a group food order. "
            }
            btntext={"See Repository"}
          />

          <FormRow
            header={"STOCK MANAGER - Created with JAVA and JAVA Swing controls"}
            link={"https://github.com/denizmemduev/StockManager"}
            text={
              "StockManager is a simple desktop application for easy stock managment. "
            }
            btntext={"See Repository"}
          />

          <FormRow
            header={"INTERSHIP PROGRAM"}
            link={"https://github.com/denizmemduev/Internship-program-project"}
            text={""}
            btntext={"See Repository"}
          />

          <FormRow
            header={"RLX"}
            link={"https://github.com/denizmemduev/RLX"}
            text={
              "RLX is application for relaxing with nature sounds created with ReactJS "
            }
            btntext={"See Repository"}
          />
        </Grid>
      </Grid>
    </div>
  );
}
