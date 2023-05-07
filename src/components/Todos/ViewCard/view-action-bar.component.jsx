import React from "react";
import PropTypes from "prop-types";
import TaskComplete from "components/Todos/ViewCard/task-complete.component";
import TaskIncomplete from "components/Todos/ViewCard/task-incomplete.component";

const ViewActionBar = ({ todo, onDeleteTask, onCompleteTask }) => {
  function handleDeleteTask() {
    dispatch(deleteTodo(todo.id));
  }

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
