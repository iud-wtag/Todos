import React from "react";
import PropTypes from "prop-types";
import ViewDetails from "components/Todos/ViewCard/view-details.component";
import ViewActionBar from "components/Todos/ViewCard/view-action-bar.component";

const ViewCard = ({ todo }) => {
  const { id, task, date, completeTime, isTaskComplete } = todo;

  return (
    <>
      <ViewDetails task={task} date={date} isTaskComplete={isTaskComplete} />
      <ViewActionBar
        id={id}
        date={date}
        completeTime={completeTime}
        isTaskComplete={isTaskComplete}
      />
    </>
  );
};

ViewCard.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    isTaskComplete: PropTypes.bool.isRequired,
    completeTime: PropTypes.number,
  }),
};

ViewCard.defaultProps = {
  completeTime: null,
};

export default ViewCard;
