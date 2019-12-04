import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject } from "mobx-react";
import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import { NavigationDesktop } from "components/NavigationDesktop";
import { NavigationMobile, NavigationToggleMobile } from "components/NavigationMobile";
import AccountDropdown from "components/AccountDropdown";
// import ShopLogo from "@reactioncommerce/components/ShopLogo/v1";
import Link from "components/Link";
import MiniCart from "components/MiniCart";


const styles = (theme) => ({
  appBar: {
    backgroundColor: theme.palette.reaction.white,
    borderBottom: `solid 1px ${theme.palette.reaction.black05}`,
    color: theme.palette.reaction.coolGrey500,
    height: 60
  },
  controls: {
    alignItems: "inherit",
    display: "inherit",
    flex: 1
  },
  title: {
    color: theme.palette.reaction.reactionBlue,
    marginRight: theme.spacing.unit,
    borderBottom: `solid 5px ${theme.palette.reaction.reactionBlue200}`
  },
  toolbar: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between"
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  navItem: {
    fontSize: "1rem",
    color: "inherit"
  },
  shopLogo: {
    width: 180,
    height: 120,
    marginTop: 10,
    marginLeft: -40,
    outline: 0,
    border: "none"
  },
  linkClick: {
    outline: 0,
    border: "none"
  }
});

@withStyles(styles, { name: "SkHeader" })
@inject("uiStore")
class Header extends Component {
  static propTypes = {
    classes: PropTypes.object,
    shop: PropTypes.shape({
      name: PropTypes.string
    }).isRequired,
    uiStore: PropTypes.shape({
      toggleMenuDrawerOpen: PropTypes.func.isRequired
    }).isRequired,
    viewer: PropTypes.object
  };

  static defaultProps = {
    classes: {}
  };

  handleNavigationToggleClick = () => {
    this.props.uiStore.toggleMenuDrawerOpen();
  };

  renderNavItems = (sectionDesktop, navItem) => (
    <div className={sectionDesktop}>
      <IconButton className={navItem}>
            Insurance
        <ExpandMoreIcon />
      </IconButton>
      <IconButton className={navItem}>
            Cyber Security
        <ExpandMoreIcon />
      </IconButton>
      <IconButton className={navItem}>
            Regulatory Notices
        <ExpandMoreIcon />
      </IconButton>
      <IconButton className={navItem}>
            Regulatory Notices
        <ExpandMoreIcon />
      </IconButton>
      <IconButton className={navItem}>
            About
        <ExpandMoreIcon />
      </IconButton>
      <IconButton className={navItem}>
            Cyber Incident
        <HelpOutlineOutlinedIcon />
      </IconButton>
      <IconButton className={navItem}>
            Get Help
      </IconButton>
    </div>
  );

  render() {
    const {
      classes: {
        appBar, controls, toolbar,
        sectionDesktop,
        linkClick,
        // title,
        navItem, shopLogo
      }
      // shop
    } = this.props;

    return (
      <AppBar position="static" elevation={0} className={appBar}>
        <Toolbar className={toolbar}>
          <Hidden mdUp>
            <NavigationToggleMobile onClick={this.handleNavigationToggleClick} />
          </Hidden>

          <div className={controls}>
            {/* <Typography className={title} color="inherit" variant="h6"> */}
            <Link route="/" className={linkClick}>
              {/* <ShopLogo shopName={shop.name} /> */}
              <img src="/static/images/pangolin.jpeg" alt="pangolin" className={shopLogo} />
            </Link>
            {/* </Typography> */}
            <Hidden smDown initialWidth={"md"}>
              <NavigationDesktop />
            </Hidden>
          </div>
          {this.renderNavItems(sectionDesktop, navItem)}
          <AccountDropdown />
          <MiniCart />
        </Toolbar>
        <NavigationMobile />
      </AppBar>
    );
  }
}

export default Header;
