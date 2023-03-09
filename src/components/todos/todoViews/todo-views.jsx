import React from "react";
import PropTypes from "prop-types";
import IncompleteTask from "components/todos/todoViews/incomplete-task";
import TodoDetails from "components/todos/todoViews/todo-details";

const TodoViews = ({ todoList }) => {
  return todoList.map((list) => {
    return (
      <div className="todo-card" key={list.id}>
        <TodoDetails list={list} />
        <IncompleteTask />
      </div>
    );
  });
};

TodoViews.propTypes = {
  todoList: PropTypes.array.isRequired,
};

export default TodoViews;