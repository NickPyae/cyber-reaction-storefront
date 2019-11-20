import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import { withStyles } from "@material-ui/core/styles";
import AccountProfileInfo from "@reactioncommerce/components/AccountProfileInfo/v1";
import InPageMenu from "@reactioncommerce/components/InPageMenu/v1";
import withAddressBook from "containers/address/withAddressBook";

const styles = (theme) => ({
  accountProfileInfoContainer: {
    marginBottom: theme.spacing.unit * 4
  }
});

@withStyles(styles)
@withAddressBook
@inject("authStore")
@observer
class ProfileMenu extends Component {
  static propTypes = {
    authStore: PropTypes.shape({
      account: PropTypes.object.isRequired
    }),
    classes: PropTypes.object,
    router: PropTypes.object.isRequired
  };

  renderAccountProfileInfo() {
    const { authStore: { account }, classes } = this.props;

    return (
      <div className={classes.accountProfileInfoContainer}>
        <AccountProfileInfo viewer={account} />
      </div>
    );
  }

  renderNavigation() {
    const { classes, router: { asPath } } = this.props;

    const menuItems = [
      {
        href: "/profile/address",
        route: "/profile/address",
        label: "Address Book",
        isSelected: asPath.includes("/profile/address")
      },
      {
        href: "/profile/orders",
        route: "/profile/orders",
        label: "Orders",
        isSelected: asPath.includes("/profile/orders")
      },
      {
        href: "/profile/rating",
        route: "/profile/rating",
        label: "Risk Rating",
        isSelected: asPath.includes("/profile/rating")
      },
      {
        href: "/profile/report",
        route: "/profile/report",
        label: "Risk Report",
        isSelected: asPath.includes("/profile/report")
      },
      {
        href: "/profile/claims",
        route: "/profile/claims",
        label: "Claims",
        isSelected: asPath.includes("/profile/claims")
      }
    ];

    return (
      <div className={classes.inPageMenuItemLink}>
        <InPageMenu menuItems={menuItems} />
      </div>
    );
  }

  render() {
    return (
      <section>
        {this.renderAccountProfileInfo()}
        {this.renderNavigation()}
      </section>
    );
  }
}

export default ProfileMenu;
