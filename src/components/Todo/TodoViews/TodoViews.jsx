import React from "react";
import PropTypes from "prop-types";
import IncompleteTask from "components/Todo/TodoViews/controllers/IncompleteTask";
import TodoDetails from "components/Todo/TodoViews/views/TodoDetails";

const TodoViews = ({ todoList, handleDeleteTask }) => {
  return todoList.map((list) => {
    return (
      <div className="todo-card" key={list.id}>
        <TodoDetails list={list} />
        <IncompleteTask handleDeleteTask={handleDeleteTask} taskID={list.id} />
      </div>
    );
  });
};

TodoViews.propTypes = {
  todoList: PropTypes.array.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
};

export default TodoViews;
