import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { editTodo, completeTodo, deleteTodo } from "actions";
import ViewCard from "components/Todo/ViewCard/view-card";
import EditCard from "components/Todo/EditCard/edit-card";
import { sanitizeInput } from "helpers/sanitizeInput";

const Todo = ({
  todo,
  // onDeleteTask,
  // onCompleteTask,
  // onEditClick,
  // onEditTask,
  // onCancelEditTask,
}) => {
  const dispatch = useDispatch();
  const [isEditClick, setIdEditClick] = useState(false);

  function handleEditClick() {
    setIdEditClick(true);
  }
  function handleCancelEditTask(taskId, inputTask) {
    dispatch(editTodo(taskId, inputTask));
    setIdEditClick(false);
  }

  function handleEditTask(taskId, editedInput) {
    const sanitizedTask = sanitizeInput(editedInput);
    if (sanitizedTask.trim() === "") {
      return;
    }
    dispatch(editTodo(taskId, sanitizedTask));
    setIdEditClick(false);
  }

  function handleCompleteTask(taskId, startDate, inputTask) {
    const sanitizedTask = sanitizeInput(inputTask);
    if (sanitizedTask.trim() === "") {
      return;
    }
    dispatch(editTodo(taskId, sanitizedTask));
    dispatch(completeTodo(taskId, startDate));
    setIdEditClick(false);
  }

  function handleDeleteTask(taskId) {
    dispatch(deleteTodo(taskId));
  }

  return (
    <div className="todo__card-view" key={todo.id}>
      {isEditClick ? (
        <EditCard
          todo={todo}
          onEditTask={handleEditTask}
          onCompleteTask={handleCompleteTask}
          onCancelEditTask={handleCancelEditTask}
        />
      ) : (
        <ViewCard
          todo={todo}
          onEditClick={handleEditClick}
          onDeleteTask={handleDeleteTask}
          onCompleteTask={handleCompleteTask}
        />
      )}
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  // onDeleteTask: PropTypes.func.isRequired,
  // onCompleteTask: PropTypes.func.isRequired,
  // onEditClick: PropTypes.func.isRequired,
  // onEditTask: PropTypes.func.isRequired,
  // onCancelEditTask: PropTypes.func.isRequired,
};

export default Todo;
