import React from "react";
import PropTypes from "prop-types";
import Button from "@reactioncommerce/components/Button/v1";
import { Router } from "routes";

const Questionnaire = ({ placement }) => (
  <div className={placement}>
    <Button actionType="important" onClick={() => Router.pushRoute("rating").then(() => window.scrollTo(0, 0))}>Click here to check your rating</Button>
  </div>
);

Questionnaire.propTypes = {
  placement: PropTypes.string
};

export default Questionnaire;
