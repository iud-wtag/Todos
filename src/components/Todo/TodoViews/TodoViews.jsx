import React from "react";
import PropTypes from "prop-types";
import IncompleteController from "components/Todo/TodoViews/controllers/IncompleteController";
import CompletedController from "components/Todo/TodoViews/controllers/CompletedController";
import TodoDetails from "components/Todo/TodoViews/views/TodoDetails";

const TodoViews = ({
  todoList,
  handleDeleteTask,
  handleCompleteTask,
  handleEditTask,
}) => {
  return todoList.map((list) => {
    return (
      <div className="todo-card" key={list.id}>
        <TodoDetails list={list} />
        {list.isTaskComplete ? (
          <CompletedController
            handleDeleteTask={handleDeleteTask}
            completeTime={list.completeTime}
            taskID={list.id}
          />
        ) : (
          <IncompleteController
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
            handleEditTask={handleEditTask}
            taskID={list.id}
          />
        )}
      </div>
    );
  });
};

TodoViews.propTypes = {
  todoList: PropTypes.array.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
  handleEditTask: PropTypes.func.isRequired,
};

export default TodoViews;
