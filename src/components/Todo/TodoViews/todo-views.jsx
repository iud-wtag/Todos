import React from "react";
import PropTypes from "prop-types";
import ViewCard from "components/Todo/ViewCard/view-card";
import EditCard from "components/Todo/EditCard/edit-card";

const TodoViews = ({ todoList, handleDeleteTask, handleCompleteTask }) => {
  return todoList.map((todo) => {
    return (
      <div className="todo-card" key={todo.id}>
        {todo.isEditBtnClicked ? (
          <EditCard
            handleEditTask={handleEditTask}
            taskId={todo.id}
            task={todo.task}
            handleCompleteTask={handleCompleteTask}
            startDate={todo.date}
          />
        ) : (
          <ViewCard
            todo={todo}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
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
  handleEditClick: PropTypes.func.isRequired,
  handleEditTask: PropTypes.func.isRequired,
};

export default TodoViews;
