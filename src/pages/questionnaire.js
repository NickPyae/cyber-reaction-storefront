import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { observer, inject } from "mobx-react";
import Helmet from "react-helmet";
import Head from "next/head";
import QuestionnairePage from "../custom/components/QuestionnairePage";

const styles = () => ({
  questionnairePage: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    marginTop: "40px"
  }
});

@withStyles(styles, { withTheme: true })
@inject("routingStore")
@observer
class Questionnaire extends Component {
  static propTypes = {
    classes: PropTypes.object,
    routingStore: PropTypes.object,
    shop: PropTypes.shape({
      currency: PropTypes.shape({
        code: PropTypes.string.isRequired
      })
    })
  };

  renderQuestionnaire = () => (
    <Fragment>
      <div id="surveyhero-embed-e0bba1ff">
        <Head>
          <script type="text/javascript" src="https://embed-cdn.surveyhero.com/js/user/embed.e0bba1ff.js" />
        </Head>
      </div>
    </Fragment>
  )

  render() {
    const { shop, classes } = this.props;

    return (
      <Fragment>
        <Helmet>
          <title>{shop && shop.name}</title>
          <meta name="description" content={shop && shop.description} />
        </Helmet>
        {this.renderQuestionnaire()}
        <QuestionnairePage customStyles={classes.questionnairePage} />
      </Fragment>
    );
  }
}

export default Questionnaire;
