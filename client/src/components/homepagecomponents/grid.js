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
    padding: 30,
    marginBottom: 10,
    marginLeft: 20,

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
            header={"RLX"}
            link={"https://github.com/denizmemduev/RLX"}
            text={
              "RLX is application for relaxing with nature sounds created using ReactJS and Firebase "
            }
            btntext={"See Repository"}
          />
          <FormRow
            header={"XOXO"}
            link={"https://github.com/denizmemduev/Tic-Tac-Toe"}
            text={
              "XOXO  is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid created with JQuery  "
            }
            btntext={"See Repository"}
          />

          <FormRow
            header={"STOCK MANAGER"}
            link={"https://github.com/denizmemduev/StockManager"}
            text={
              "Stock Manager is a simple desktop application for easy stock management created with JAVA and JAVA Swing controls "
            }
            btntext={"See Repository"}
          />

          <FormRow
            header={"FOOD BASKET"}
            link={"https://github.com/denizmemduev/FOOD-BASKET"}
            text={
              " Food basket is a web based application which serves to making a group food order created using React JS, Node JS and Firebase "
            }
            btntext={"See Repository"}
          />

          <FormRow
            header={"Subnet Calculator for IPV4"}
            link={"https://github.com/denizmemduev/Subnet-Calculator-for-IPV4"}
            text={
              "The IP Subnet Calculator performs subnet calculations for the given network address and prefix"
            }
            btntext={"See Repository"}
          />

          <FormRow
            header={"TO DO LIST"}
            link={"https://github.com/denizmemduev/Todo-app"}
            text={
              "A list of the tasks that you have to do, or things that you want to do created using Angular TypeScript and Firebase."
            }
            btntext={"See Repository"}
          />
        </Grid>
      </Grid>
    </div>
  );
}
