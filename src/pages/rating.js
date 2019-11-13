import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { observer, inject } from "mobx-react";
import Rating from "../custom/components/Rating";

const styles = () => ({
});

@withStyles(styles, { withTheme: true })
@inject("routingStore")
@observer
class RatingPage extends Component {
    static propTypes = {
      routingStore: PropTypes.object,
      shop: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string
      })
    };

    render() {
      const { shop } = this.props;

      return (
        <Fragment>
          <Helmet>
            <title>{shop && shop.name}</title>
            <meta name="description" content={shop && shop.description} />
          </Helmet>
          <Rating />
        </Fragment>);
    }
}

export default RatingPage;
