import React from "react";
import PropTypes from "prop-types";
import TaskComplete from "components/Todo/ViewCard/task-complete.component";
import TaskIncomplete from "components/Todo/ViewCard/task-incomplete.component";

const ViewActionBar = ({ todo, onEditClick, onDeleteTask, onCompleteTask }) => {
  return todo.isTaskComplete ? (
    <TaskComplete todo={todo} onDeleteTask={onDeleteTask} />
  ) : (
    <TaskIncomplete
      todo={todo}
      onEditClick={onEditClick}
      onDeleteTask={onDeleteTask}
      onCompleteTask={onCompleteTask}
    />
  );
};

ViewActionBar.propTypes = {
  todo: PropTypes.object.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onCompleteTask: PropTypes.func.isRequired,
};

export default ViewActionBar;
