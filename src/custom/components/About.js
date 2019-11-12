import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FlashOnOutlined, GroupOutlined, SettingsOutlined } from "@material-ui/icons";
import { Router } from "routes";

const styles = (theme) => ({
  aboutCard: {
    backgroundColor: theme.palette.reaction.forestGreen300
  },
  exploreButton: {
    backgroundColor: theme.palette.reaction.reactionBlue
  },
  infoCard: {
    backgroundColor: theme.palette.reaction.darkBlue500
  },
  textColor: {
    color: "white"
  }
});

@withStyles(styles, { withTheme: true })
class About extends Component {
    static propTypes = {
      classes: PropTypes.object
    };

    goToQuestionnaire = () => Router.pushRoute("questionnaire");

    render() {
      const { classes: { aboutCard, exploreButton, infoCard, textColor } } = this.props;

      return (
        <Grid container
          direction="column"
          justify="center"
          alignItems="center"
          spacing="24"
        >
          <Grid item>
            <h4>
              <img src="http://31.media.tumblr.com/tumblr_lw2lhqjrel1qfmi03o9_r1_500.gif" alt="profile" className="circle responsive-img" />
            </h4>
          </Grid>
          <Grid item>
            <Card>
              <CardContent className={aboutCard}>
                <Typography gutterBottom className={textColor}>
                I am a person who likes to always experiment with many technologies, learn more, and with every mistake made it is the best to improve learning and designs, since nobody is born knowing...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Grid container direction="row" justify="center" spacing="24">
              <Grid item xs>
                <Card>
                  <CardContent className={infoCard}>
                    <Grid container direction="column" justify="center"
                      alignItems="center" spacing="24"
                    >
                      <Grid item>
                        <FlashOnOutlined style={{ fontSize: 120 }} className={textColor}/>
                      </Grid>
                      <Grid item>
                        <Typography variant="h5" className={textColor}>
                    Accelerate Development
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={textColor} paragraph>
                    We did most of the heavy work for you to provide default styles that incorporate our custom components. In addition, we refine animations and transitions to provide a smoother experience for developers. Better developer experience.
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs>
                <Card>
                  <CardContent className={infoCard}>
                    <Grid container direction="column" justify="center"
                      alignItems="center" spacing="24"
                    >
                      <Grid item>
                        <GroupOutlined style={{ fontSize: 120 }} className={textColor}/>
                      </Grid>
                      <Grid item>
                        <Typography variant="h5" className={textColor}>
                        User Focused
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={textColor} paragraph>
                        Through the use of elements and principles of Material Design, we have been able to create a framework that incorporates components and animations that provide more information to users. In addition, a single underlying response system on all platforms.
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs>
                <Card>
                  <CardContent className={infoCard}>
                    <Grid container direction="column" justify="center"
                      alignItems="center" spacing="24"
                    >
                      <Grid item>
                        <SettingsOutlined style={{ fontSize: 120 }} className={textColor}/>
                      </Grid>
                      <Grid item>
                        <Typography variant="h5" className={textColor}>
                        Easy to work
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={textColor} paragraph>
                        We have provided detailed documentation, as well as specific code examples to help new users get started. We are also always open to comments and can answer any questions a user may have about Materialize.
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Card onClick={this.goToQuestionnaire}>
              <CardContent className={exploreButton}>
                <Typography gutterBottom className={textColor}>
                Click here to explore your journey
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <img src="http://materializecss.com/templates/parallax-template/background3.jpg" alt="template" />
          </Grid>
        </Grid>
      );
    }
}

export default About;
