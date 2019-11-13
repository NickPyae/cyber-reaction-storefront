import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@reactioncommerce/components/Button/v1";
import { Router } from "routes";

const styles = () => ({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

@withStyles(styles, { withTheme: true })
class Rating extends Component {
  static propTypes = {
    classes: PropTypes.object
  };

  goToProductGrid = () => Router.pushRoute("productGrid");

  render() {
    const { classes } = this.props;

    const bull = <span className={classes.bullet}>•</span>;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
          be
            {bull}
          nev
            {bull}o{bull}
          lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          adjective
          </Typography>
          <Typography variant="body2" component="p">
          well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button actionType="important" size="small" onClick={this.goToProductGrid}>
            Click here to see your recommended products
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default Rating;
