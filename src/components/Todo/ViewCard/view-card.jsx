import React from "react";
import PropTypes from "prop-types";
import ViewDetails from "components/Todo/ViewCard/view-details.component";
import ViewActionBar from "components/Todo/ViewCard/view-action-bar.component";

const ViewCard = ({ todo, onDeleteTask, onCompleteTask, onEditClick }) => {
  return (
    <>
      <ViewDetails todo={todo} />
      <ViewActionBar
        onDeleteTask={onDeleteTask}
        onCompleteTask={onCompleteTask}
        onEditClick={onEditClick}
        todo={todo}
      />
    </>
  );
};

ViewCard.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onCompleteTask: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
};

export default ViewCard;
