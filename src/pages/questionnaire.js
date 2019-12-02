import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { observer, inject } from "mobx-react";
import Helmet from "react-helmet";
import Head from "next/head";
import PageLoading from "components/PageLoading";
import Questionnaire from "../custom/components/Questionnaire";

const styles = () => ({
  questionnaire: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    marginTop: "40px"
  }
});

@withStyles(styles, { withTheme: true })
@inject("routingStore")
@observer
class QuestionnairePage extends Component {
  static propTypes = {
    classes: PropTypes.object,
    routingStore: PropTypes.object,
    shop: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  };

  state = {
    isLoading: true,
    isSurveyLoaded: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => ({
        isLoading: false
      }));
    }, 5500);

    setTimeout(() => {
      this.setState(() => ({
        isSurveyLoaded: true
      }));
    }, 6000);
  }

  renderQuestionnaire = () => (
    <Fragment>
      <div id="surveyhero-embed-557f1bd8">
        <Head>
          <script src="https://embed-cdn.surveyhero.com/js/user/embed.557f1bd8.js" type="text/javascript" />
        </Head>
      </div>
    </Fragment>
  )

  render() {
    const { shop, classes } = this.props;

    if (this.state.isLoading) return <PageLoading message="Loading questionnaires..." />;

    return (
      <Fragment>
        <Helmet>
          <title>{shop && shop.name}</title>
          <meta name="description" content={shop && shop.description} />
        </Helmet>
        {this.renderQuestionnaire()}
        { this.state.isSurveyLoaded && <Questionnaire placement={classes.questionnaire} /> }
      </Fragment>
    );
  }
}

export default QuestionnairePage;
