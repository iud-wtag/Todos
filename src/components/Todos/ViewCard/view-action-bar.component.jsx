import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTodo, completeTodo } from "actions";
import TaskComplete from "components/Todos/ViewCard/task-complete.component";
import TaskIncomplete from "components/Todos/ViewCard/task-incomplete.component";

const ViewActionBar = ({ id, date, completeTime, isTaskComplete }) => {
  const dispatch = useDispatch();

  function handleDeleteTask() {
    dispatch(deleteTodo(id));
  }

  function handleCompleteTask() {
    dispatch(completeTodo(id, date));
  }

  return isTaskComplete ? (
    <TaskComplete onDeleteTask={handleDeleteTask} completeTime={completeTime} />
  ) : (
    <TaskIncomplete
      onDeleteTask={handleDeleteTask}
      onCompleteTask={handleCompleteTask}
    />
  );
};

ViewActionBar.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  isTaskComplete: PropTypes.bool.isRequired,
  completeTime: PropTypes.number,
};

ViewActionBar.defaultProps = {
  completeTime: null,
};

export default ViewActionBar;
