import React from "react";
import PropTypes from "prop-types";
import ViewCard from "components/Todo/ViewCard/view-card";
import EditCard from "components/Todo/EditCard/edit-card";

const TodoCards = ({
  todoList,
  handleDeleteTask,
  handleCompleteTask,
  handleEditClick,
  handleEditTask,
  handleEditCancelTask,
}) => {
  return todoList.map((todo) => {
    return (
      <div className="todo__card-view" key={todo.id}>
        {todo.isEditButtonClicked ? (
          <EditCard
            todo={todo}
            handleEditTask={handleEditTask}
            handleCompleteTask={handleCompleteTask}
            handleEditCancelTask={handleEditCancelTask}
          />
        ) : (
          <ViewCard
            todo={todo}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
            handleEditClick={handleEditClick}
          />
        )}
      </div>
    );
  });
};

TodoCards.propTypes = {
  todoList: PropTypes.array.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleEditTask: PropTypes.func.isRequired,
  handleEditCancelTask: PropTypes.func.isRequired,
};

export default TodoCards;
