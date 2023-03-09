import React from "react";
import PropTypes from "prop-types";
import IncompleteTask from "components/Todo/TodoViews/incomplete-task.component";
import TodoDetails from "components/Todo/TodoViews/todo-details.component";

const TodoViews = ({ todoList, handleDeleteTask, handleCompleteTask }) => {
  return todoList.map((list) => {
    return (
      <div className="todo-card" key={list.id}>
        <TodoDetails list={list} />
        {list.isTaskComplete ? (
          <CompletedController
            handleDeleteTask={handleDeleteTask}
            taskID={list.id}
            completeTime={list.completeTime}
          />
        ) : (
          <IncompleteController
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
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
};

export default TodoViews;
