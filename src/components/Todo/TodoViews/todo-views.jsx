import React from "react";
import PropTypes from "prop-types";
import ViewCard from "components/Todo/ViewCard/view-card";

const TodoViews = ({ todoList, handleDeleteTask, handleCompleteTask }) => {
  return todoList.map((todo) => {
    return (
      <div className="todo-card" key={todo.id}>
        <ViewCard
          todo={todo}
          handleDeleteTask={handleDeleteTask}
          handleCompleteTask={handleCompleteTask}
        />
      </div>
    );
  });
};

TodoViews.propTypes = {
  todoList: PropTypes.array.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
};

export default TodoViews;
