import React from "react";
import PropTypes from "prop-types";

import Todo from "./todo";

const TodoCards = ({
  todoList,
  // onDeleteTask,
  // onCompleteTask,
  // onEditClick,
  // onEditTask,
  // onCancelEditTask,
}) => {
  return todoList.map((todo) => {
    return (
      <Todo
        key={todo.id}
        todo={todo}
        // onDeleteTask={onDeleteTask}
        // onCompleteTask={onCompleteTask}
        // onEditClick={onEditClick}
        // onEditTask={onEditTask}
        // onCancelEditTask={onCancelEditTask}
      />
      // <div className="todo__card-view" key={todo.id}>
      //   {todo.onEdit ? (
      //     <EditCard
      //       todo={todo}
      //       onEditTask={onEditTask}
      //       onCompleteTask={onCompleteTask}
      //       onCancelEditTask={onCancelEditTask}
      //     />
      //   ) : (
      //     <ViewCard
      //       todo={todo}
      //       onEditClick={onEditClick}
      //       onDeleteTask={onDeleteTask}
      //       onCompleteTask={onCompleteTask}
      //     />
      //   )}
      // </div>
    );
  });
};

TodoCards.propTypes = {
  todoList: PropTypes.array.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onCompleteTask: PropTypes.func.isRequired,
  // onEditClick: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
  onCancelEditTask: PropTypes.func.isRequired,
};

export default TodoCards;
