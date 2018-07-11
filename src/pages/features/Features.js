import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import "./Features.css";
import featuresData from "./featuresData";

class Features extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="features-container">
        <Grid container>
          {featuresData.map(item => {
            return (

            //  {item.center ? <Grid item xs={4} md={2} /> : ""}

                <Grid item xs={4} md={4} sm={6}>
                  <div class="feature">
                    <img src={item.img} />
                    <h2 class="light">{item.title}</h2>
                    {item.button ? (
                      <a href="#pricing" class="awesome-feature">
                        {item.button}
                      </a>
                    ) : (
                      ""
                    )}
                    <p>{item.desc}</p>
                  </div>
                </Grid>

            );
          }, this)}
        </Grid>
      </div>
    );
  }
}
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

Features.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Features);
