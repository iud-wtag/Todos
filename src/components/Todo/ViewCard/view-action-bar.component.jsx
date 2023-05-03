import React from "react";
import PropTypes from "prop-types";
import TaskComplete from "components/Todo/TodoCards/task-complete.component";
import TaskIncomplete from "components/Todo/TodoCards/task-incomplete.component";

const ViewActionBar = ({ todo, onDeleteTask, onCompleteTask }) => {
  return todo.isTaskComplete ? (
    <TaskComplete todo={todo} onDeleteTask={onDeleteTask} />
  ) : (
    <TaskIncomplete
      todo={todo}
      onDeleteTask={onDeleteTask}
      onCompleteTask={onCompleteTask}
    />
  );
};

ViewActionBar.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onCompleteTask: PropTypes.func.isRequired,
};

export default ViewActionBar;
