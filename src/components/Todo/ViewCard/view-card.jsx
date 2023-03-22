import React from "react";
import PropTypes from "prop-types";
import ViewDetails from "components/Todo/ViewCard/view-details.component";
import ViewActionBar from "components/Todo/ViewCard/view-action-bar.component";

const ViewCard = ({ todo, handleDeleteTask, handleCompleteTask }) => {
  return (
    <>
      <ViewDetails todo={todo} />
      <ViewActionBar
        handleDeleteTask={handleDeleteTask}
        handleCompleteTask={handleCompleteTask}
        todo={todo}
      />
    </>
  );
};

ViewCard.propTypes = {
  todo: PropTypes.object.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
};

export default ViewCard;
