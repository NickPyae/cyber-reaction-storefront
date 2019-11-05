import React from "react";
import PropTypes from "prop-types";
import Button from "@reactioncommerce/components/Button/v1";
import { Router } from "routes";

const QuestionnairePage = ({ customStyles }) => (
  <div className={customStyles}>
    <Button title="Default" isShortHeight onClick={() => Router.pushRoute("productGrid")}>Go to Products</Button>
  </div>

);

QuestionnairePage.propTypes = {
  classes: PropTypes.object,
  customStyles: PropTypes.object
};

export default QuestionnairePage;
