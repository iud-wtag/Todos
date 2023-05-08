import React from "react";
import PropTypes from "prop-types";
import TaskComplete from "components/Todos/ViewCard/task-complete.component";
import TaskIncomplete from "components/Todos/ViewCard/task-incomplete.component";

const ViewActionBar = ({ todo, onSetEdit }) => {
  return todo.isTaskComplete ? (
    <TaskComplete todo={todo} />
  ) : (
    <TaskIncomplete todo={todo} onSetEdit={onSetEdit} />
  );
};

ViewActionBar.propTypes = {
  todo: PropTypes.object.isRequired,
  onSetEdit: PropTypes.func.isRequired,
};

export default ViewActionBar;
