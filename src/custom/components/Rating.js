import React from "react";
import Button from "@reactioncommerce/components/Button/v1";
import { Router } from "routes";

const Rating = () => (
  <div>
    <Button actionType="important" onClick={() => Router.pushRoute("productGrid")}>Click here to check your recommended products</Button>
  </div>
);

export default Rating;
