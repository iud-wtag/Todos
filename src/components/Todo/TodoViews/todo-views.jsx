import React from "react";
import PropTypes from "prop-types";
import TodoActionBar from "components/Todo/TodoViews/todo-action-bar.component";
import CompletedTask from "components/Todo/TodoViews/completed-task.component";
import TodoDetails from "components/Todo/TodoViews/todo-details.component";

const TodoViews = ({ todoList, handleDeleteTask, handleCompleteTask }) => {
  return todoList.map((todo) => {
    return (
      <div className="todo-card todo-view-card" key={todo.id}>
        <TodoDetails todo={todo} />
        {todo.isTaskComplete ? (
          <CompletedTask
            handleDeleteTask={handleDeleteTask}
            taskId={todo.id}
            completeTime={todo.completeTime}
          />
        ) : (
          <TodoActionBar
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
            taskId={todo.id}
            startDate={todo.date}
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
