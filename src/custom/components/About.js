import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Router } from "routes";

const styles = (theme) => ({
  imageSection: {
    width: "100%",
    height: "auto"
  }
});

@withStyles(styles, { withTheme: true })
class About extends Component {
    static propTypes = {
      classes: PropTypes.object
    };

    goToQuestionnaire = () => Router.pushRoute("questionnaire").then(() => window.scrollTo(0, 0));

    render() {
      const {
        classes:
        { imageSection }
      } = this.props;

      return (
        <Grid container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={24}
        >
          <Grid item xs>
            <img src="/static/images/top-section.png" alt="top-section" className={imageSection} onClick={this.goToQuestionnaire} />
          </Grid>
          <Grid item xs>
            <img src="/static/images/what-is-pangolin.png" alt="what-is-pangolin" className={imageSection} />
          </Grid>
          <Grid item xs>
            <img src="/static/images/cyber-risk.png" alt="cyber-risk" className={imageSection} />
          </Grid>
          <Grid item xs>
            <img src="/static/images/clients-say.png" alt="clients-say" className={imageSection} />
          </Grid>
          <Grid item xs>
            <img src="/static/images/test-screen.png" alt="test-screen" className={imageSection} />
          </Grid>
          <Grid item xs>
            <img src="/static/images/mid-section.png" alt="mid-section" className={imageSection} />
          </Grid>
        </Grid>
      );
    }
}

export default About;
