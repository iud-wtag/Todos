import React from "react";
import PropTypes from "prop-types";
import ViewDetails from "components/Todos/ViewCard/view-details.component";
import ViewActionBar from "components/Todos/ViewCard/view-action-bar.component";

const ViewCard = ({ todo }) => {
  return (
    <>
      <ViewDetails todo={todo} />
      <ViewActionBar />
    </>
  );
};

ViewCard.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default ViewCard;
