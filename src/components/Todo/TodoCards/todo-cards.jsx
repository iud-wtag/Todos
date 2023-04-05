import React from "react";
import PropTypes from "prop-types";
import TodoCardTop from "components/Todo/TodoCards/todo-card-top.component";
import TodoActionBar from "components/Todo/TodoCards/todo-action-bar.component";
import ViewCard from "components/Todo/ViewCard/view-card";

const TodoCards = ({ todoList, handleDeleteTask, handleCompleteTask }) => {
  return todoList.map((todo) => {
    return (
      <div className="todo-card todo-view-card" key={todo.id}>
        <TodoCardTop todo={todo} />
        <TodoActionBar
          handleDeleteTask={handleDeleteTask}
          todo={todo}
          handleCompleteTask={handleCompleteTask}
        />
      </div>
    );
  });
};

TodoCards.propTypes = {
  todoList: PropTypes.array.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
};

export default TodoCards;
