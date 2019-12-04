import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@reactioncommerce/components/Button/v1";
import StarsIcon from "@material-ui/icons/Stars";
import { Router } from "routes";

const styles = () => ({
  card: {
    width: 350
  },
  title: {
    fontSize: 20,
    fontWeight: "bolder",
    textAlign: "center"
  },
  gradientScale: {
    height: 8,
    width: 190,
    margin: "25px 0px 25px 5px",
    transformOrigin: "0 0",
    transform: "scaleX(-1) rotate(90deg)",
    background: "linear-gradient(89.77deg, #20af5d, #a6d107 24.94%,#ecce01 50.84%, #f7a501 75.73%, #ef3e58)"
  },
  scoreTriangle: {
    wdith: 0,
    height: 0,
    borderTop: "4px solid transparent",
    borderBottom: "4px solid transparent",
    borderLeft: "10px solid #009aff",
    marginLeft: -3,
    transition: "top .2s"
  },
  starNScore: {
    paddingLeft: 45,
    marginTop: -30,
    paddingBottom: 10
  },
  poweredByText: {
    fontSize: "0.7rem"
  },
  upguardLogo: {
    maxWidth: 100
  }
});

@withStyles(styles, { withTheme: true })
class Rating extends Component {
  static propTypes = {
    classes: PropTypes.object
  };

  goToProductGrid = () => Router.pushRoute("productGrid").then(() => window.scrollTo(0, 0));

  render() {
    const {
      classes:
      { card, title, gradientScale, scoreTriangle, starNScore, poweredByText, upguardLogo }
    } = this.props;

    return (
      <Grid container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={24}
      >
        <Grid item xs sm md>
          <Card className={card}>
            <CardContent>
              <Typography variant="h5" className={title}>
                Cyber Security Rating
              </Typography>
              <Grid container direction="column" justify="center"
                alignItems="center" spacing={24}
              >
                <Grid item xs sm md>
                  <div className={gradientScale} />
                  <div className={scoreTriangle} />
                </Grid>
                <Grid item xs sm md>
                  <Grid container direction="row" className={starNScore}>
                    <Grid item xs sm md>
                      <StarsIcon style={{ fontSize: 80, opacity: 0.35, fill: "rgb(32, 175, 93)" }} /> { /* fill needs to be dynamic to change the color of star  */}
                    </Grid>
                    <Grid item xs sm md>
                      <Typography variant="h2" style={{ color: "rgb(32, 175, 93)" }}>  { /* color needs to be dynamic to change the color of number  */}
                        804 { /* number needs to be dynamic  */}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs sm md>
                  <Typography variant="caption" display="block" gutterBottom className={poweredByText}>
                  Powered by
                  </Typography>
                  <img
                    src="https://www.upguard.com/hubfs/2017_site/svg/upguard-logo-black.svg?t=1511209944376"
                    alt="logo"
                    className={upguardLogo}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs sm md>
          <Button actionType="important" size="small" onClick={this.goToProductGrid}>
            Click here to see your recommended products
          </Button>
        </Grid>
      </Grid>

    );
  }
}

export default Rating;
