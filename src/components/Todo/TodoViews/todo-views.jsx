import React from "react";
import PropTypes from "prop-types";
import ViewCard from "components/Todo/ViewCard/view-card";
import EditCard from "components/Todo/EditCard/edit-card";

const TodoViews = ({
  todoList,
  handleDeleteTask,
  handleCompleteTask,
  handleEditClick,
  handleEditTask,
}) => {
  return todoList.map((todo) => {
    return (
      <>
        {todo.isEditBtnClicked ? (
          <EditCard
            todo={todo}
            handleEditTask={handleEditTask}
            handleCompleteTask={handleCompleteTask}
            key={todo.id}
          />
        ) : (
          <ViewCard
            todo={todo}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
            handleEditClick={handleEditClick}
            key={todo.id}
          />
        )}
      </>
    );
  });
};

TodoViews.propTypes = {
  todoList: PropTypes.array.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleEditTask: PropTypes.func.isRequired,
};

export default TodoViews;
