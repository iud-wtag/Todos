import React from "react";
import PropTypes from "prop-types";
import TodoCardTop from "components/Todo/TodoCards/todo-card-top.component";
import TodoActionBar from "components/Todo/TodoCards/todo-action-bar.component";

const TodoCards = ({ todoList, onDeleteTask, onCompleteTask }) => {
  return todoList.map((todo) => {
    return (
      <div className="todo__card-view todo-card todo-view-card" key={todo.id}>
        <TodoCardTop todo={todo} />
        <TodoActionBar
          onDeleteTask={onDeleteTask}
          onCompleteTask={onCompleteTask}
          todo={todo}
        />
      </div>
    );
  });
};

TodoCards.propTypes = {
  todoList: PropTypes.array.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onCompleteTask: PropTypes.func.isRequired,
};

export default TodoCards;
