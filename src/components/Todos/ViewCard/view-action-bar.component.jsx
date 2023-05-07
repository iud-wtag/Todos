import React from "react";
import PropTypes from "prop-types";
import TaskComplete from "components/Todos/ViewCard/task-complete.component";
import TaskIncomplete from "components/Todos/ViewCard/task-incomplete.component";

const ViewActionBar = ({ todo, setIsEdit }) => {
  return todo.isTaskComplete ? (
    <TaskComplete todo={todo} />
  ) : (
    <TaskIncomplete todo={todo} setIsEdit={setIsEdit} />
  );
};

ViewActionBar.propTypes = {
  todo: PropTypes.object.isRequired,
  setIsEdit: PropTypes.func.isRequired,
};

export default ViewActionBar;
