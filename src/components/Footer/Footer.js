import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const date = new Date();

const styles = (theme) => ({
  footer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing.unit * 2
  },
  footerSection: {
    width: "100%",
    height: "auto"
  }
});

const Footer = ({ ...props }) => (
  <footer className={props.classes.footer}>
    <Typography variant="caption">
      {/* &copy; {date.getFullYear()} { props.shop.name } */}
      <img src="/static/images/footer-section.png" alt="footer-section" className={props.classes.footerSection} />
    </Typography>
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.object,
  shop: PropTypes.object
};

export default withStyles(styles, { name: "SkFooter" })(Footer);
