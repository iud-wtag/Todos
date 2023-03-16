import React from "react";
import PropTypes from "prop-types";
import IncompleteTask from "components/Todo/TodoViews/incomplete-task.component";
import CompletedTask from "components/Todo/TodoViews/completed-task.component";
import TodoDetails from "components/Todo/TodoViews/todo-details.component";

const TodoViews = ({ todoList, handleDeleteTask, handleCompleteTask }) => {
  return todoList.map((list) => {
    return (
      <div className="todo-card todo-view-card" key={list.id}>
        <TodoDetails list={list} />
        {list.isTaskComplete ? (
          <CompletedTask
            handleDeleteTask={handleDeleteTask}
            taskID={list.id}
            completeTime={list.completeTime}
          />
        ) : (
          <IncompleteTask
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
            taskID={list.id}
            startDate={list.date}
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
