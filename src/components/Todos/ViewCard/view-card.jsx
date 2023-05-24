import React from "react";
import PropTypes from "prop-types";
import ViewDetails from "components/Todos/ViewCard/view-details.component";
import ViewActionBar from "components/Todos/ViewCard/view-action-bar.component";

const ViewCard = ({ todo }) => {
  return (
    <>
      <ViewDetails task={todo.task} date={todo.date} />
      <ViewActionBar />
    </>
  );
};

ViewCard.propTypes = {
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }),
};

export default ViewCard;
