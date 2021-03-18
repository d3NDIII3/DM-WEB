import React, { useEffect } from "react";

import PublicIcon from "@material-ui/icons/Public";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import LinkIcon from "@material-ui/icons/Link";
import "./webpages.css";
export default function Webpages() {
  Aos.init({
    duration: 2000,
  });

  function FormRow(props) {
    return (
      <React.Fragment>
        <Grid item sm={12} xs={12} md={6} lg={4}>
          <div data-aos={"flip-up"} className={"paper"}>
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
          </div>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={"root"}>
      <div>
        <h1 data-aos={"fade-in"} className={"text2"}>
          {" "}
          <PublicIcon
            style={{ fontSize: 60, textAlign: "center" }}
          ></PublicIcon>
          A collection of websites and web based apps
        </h1>
      </div>
      <hr data-aos={"flip-right"}></hr>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow
            header={"RLX"}
            link={"https://rlx.netlify.com"}
            text={
              "RLX is application for relaxing with nature sounds created with  React JS and Firebase  "
            }
            btntext={"Website"}
          />

          <FormRow
            header={"To-do List"}
            link={"https://dm-todo.netlify.app/"}
            text={
              "A list of the tasks that you have to do, or things that you want to do. Created with: Angular, SASS and Firebase "
            }
            btntext={"Website"}
          />

          <FormRow
            header={"XOXO"}
            link={"https://dm-xoxo.netlify.com"}
            text={
              "XOXO is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid.  "
            }
            btntext={"Website"}
          />

          <FormRow
            header={"Subnet Calculator for IPV4"}
            link={"https://ipv4-calculator.netlify.app/"}
            text={
              "The IP Subnet Calculator performs subnet calculations for the given network address and prefix"
            }
            btntext={"Website"}
          />
        </Grid>
      </Grid>
    </div>
  );
}
