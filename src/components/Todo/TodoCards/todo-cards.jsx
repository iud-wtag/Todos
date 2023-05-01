import React from "react";
import PropTypes from "prop-types";
import ViewCard from "components/Todo/ViewCard/view-card";
import EditCard from "components/Todo/EditCard/edit-card";

const TodoCards = ({
  todoList,
  onDeleteTask,
  onCompleteTask,
  onEditClick,
  onEditTask,
  onEditCancelTask,
}) => {
  return todoList.map((todo) => {
    return (
      <div className="todo__card-view" key={todo.id}>
        {todo.isEditButtonClicked ? (
          <EditCard
            todo={todo}
            onEditTask={onEditTask}
            onCompleteTask={onCompleteTask}
            onEditCancelTask={onEditCancelTask}
          />
        ) : (
          <ViewCard
            todo={todo}
            onDeleteTask={onDeleteTask}
            onCompleteTask={onCompleteTask}
            onEditClick={onEditClick}
          />
        )}
      </div>
    );
  });
};

TodoCards.propTypes = {
  todoList: PropTypes.array.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onCompleteTask: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
  onEditCancelTask: PropTypes.func.isRequired,
};

export default TodoCards;
