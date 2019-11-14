import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import PanoramaWideAngleIcon from "@material-ui/icons/PanoramaWideAngle";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { Router } from "routes";

const styles = (theme) => ({
  pangolinImage: {
    width: "100%",
    height: "auto",
    maxWidth: 500,
    maxHeight: 500,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  sceneryImage: {
    width: "100%",
    height: "auto",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
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
      const { classes: { pangolinImage, sceneryImage, aboutCard, exploreButton, infoCard, textColor } } = this.props;

      return (
        <Grid container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={24}
        >
          <Grid item xs>
            <img src="/static/images/pangolin.jpg" alt="pangolin" className={pangolinImage} />
          </Grid>
          <Grid item xs>
            <Card>
              <CardContent className={aboutCard}>
                <Typography gutterBottom className={textColor}>
                Pangolins have no teeth; instead they rely on a gizzard-like stomach that is adapted for grinding food. Pangolins use their scales as tools for self-defense. If threatened, the pangolin will perform a cutting motion with its scales if anything is inserted between them—that's a nasty shock for a strange paw or snout!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Grid container direction="row" justify="center" spacing={24}>
              <Grid item xs>
                <Card>
                  <CardContent className={infoCard}>
                    <Grid container direction="column" justify="center"
                      alignItems="center" spacing={24}
                    >
                      <Grid item>
                        <WhatshotIcon style={{ fontSize: 120 }} className={textColor}/>
                      </Grid>
                      <Grid item>
                        <Typography variant="h5" className={textColor}>
                        Why Pangolin
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={textColor} paragraph>
                        Pangolins are found throughout South-East Asia and are the only mammals wholly-covered in scales and they use those scales to protect themselves from predators in the wild. If under threat, a pangolin will immediately curl into a tight ball and will use their sharp-scaled tails to defend themselves.
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
                      alignItems="center" spacing={24}
                    >
                      <Grid item>
                        <PanoramaWideAngleIcon style={{ fontSize: 120 }} className={textColor}/>
                      </Grid>
                      <Grid item>
                        <Typography variant="h5" className={textColor}>
                        Why we think this name is perfect for who we are and what we are trying to achieve
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={textColor} paragraph>
                        Pangolins, like our target customers, are small but have a strong defence against attackers. Like our new company, they are native to South-East Asia. As an endangered species, they still need help even with their natural defences.
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
                      alignItems="center" spacing={24}
                    >
                      <Grid item>
                        <AttachMoneyIcon style={{ fontSize: 120 }} className={textColor}/>
                      </Grid>
                      <Grid item>
                        <Typography variant="h5" className={textColor}>
                        What else
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={textColor} paragraph>
                        We would like to donate a small sum of money to the protection of Pangolins as part of our Corporate Social Responsibility strategy.
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <Card onClick={this.goToQuestionnaire}>
              <CardContent className={exploreButton}>
                <Typography gutterBottom className={textColor}>
                Click here to explore your cyber journey
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <img src="/static/images/scenery.jpg" alt="scenery" className={sceneryImage} />
          </Grid>
        </Grid>
      );
    }
}

export default About;
