import { Component } from "react";
import "../homepage.css";
import Aos from "aos";
import { makeStyles, rgbToHex } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },

  icon: {
    fontSize: "50px",
    color: "white",
    margin: "5px",
    backgroundColor: " rgba(160, 159, 159, 0.445)",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
  },

  ListItem: {
    cursor: "pointer",
  },

  text: { color: " rgb(201, 201, 201)", fontSize: "60px", margin: "5px" },
}));

export default function FolderList() {
  const classes = useStyles();

  Aos.init({
    duration: 2000,
  });
  return (
    <div className="footer">
      <div className="sect">
        <hr data-aos={"fade-right"} />

        <div className="ftr">
          <div id="one" className="fr">
            <h2 className="ftext" data-aos={"fade-in"}>
              Contacts:
            </h2>
            <div className="links">
              <List>
                <a href="mailto: deniz.memduev@hotmail.com">
                  <ListItem
                    className={classes.ListItem}
                    data-aos={"fade-right"}
                  >
                    <AlternateEmailIcon className={classes.icon} />
                    <ListItemText
                      primary="deniz.memduev@hotmail.com"
                      className={classes.text}
                    />
                  </ListItem>
                </a>
                <a href="tel: 0899350531">
                  <ListItem
                    className={classes.ListItem}
                    data-aos={"fade-right"}
                  >
                    <PhoneIcon className={classes.icon} />
                    <ListItemText
                      primary="+359899350531"
                      className={classes.text}
                    />
                  </ListItem>
                </a>
                <a href="https://goo.gl/maps/c2GiunFmCCioS64k9">
                  <ListItem
                    className={classes.ListItem}
                    data-aos={"fade-right"}
                  >
                    <LocationOnIcon className={classes.icon} />
                    <ListItemText
                      primary="Varna / Bulgaria"
                      className={classes.text}
                    />
                  </ListItem>
                </a>
              </List>
            </div>
          </div>

          <div id="two" className="fr">
            <h2 className="ftext" data-aos={"fade-in"}>
              {" "}
              Links to social networks:
            </h2>
            <List>
              <a
                target="_blank"
                href="https://www.facebook.com/deniz.memdueff/"
              >
                <ListItem className={classes.ListItem} data-aos={"fade-in"}>
                  <FacebookIcon className={classes.icon} />
                  <ListItemText primary="Facebook" className={classes.text} />
                </ListItem>
              </a>

              <a
                target="_blank"
                href="https://www.instagram.com/deniz.memdueff/"
              >
                <ListItem className={classes.ListItem} data-aos={"fade-in"}>
                  <InstagramIcon className={classes.icon} />
                  <ListItemText primary="Instagram" className={classes.text} />
                </ListItem>
              </a>
              <ListItem className={classes.ListItem} data-aos={"fade-in"}>
                <TwitterIcon className={classes.icon} />
                <ListItemText primary="Twitter" className={classes.text} />
              </ListItem>
            </List>
          </div>
        </div>
      </div>

      <h2 className="end">
        {" "}
        © Powered by React, Material UI and strong coffee.
      </h2>
    </div>
  );
}
