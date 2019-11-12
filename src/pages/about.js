import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import About from "../custom/components/About";

@inject("routingStore")
@observer
class AboutPage extends Component {
    static propTypes = {
      classes: PropTypes.object,
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
          <About />
        </Fragment>
      );
    }
}

export default AboutPage;
