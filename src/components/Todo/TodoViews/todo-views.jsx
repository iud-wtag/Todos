import React from "react";
import PropTypes from "prop-types";
import ViewCard from "components/Todo/ViewCard/view-card";
import EditCard from "components/Todo/EditCard/edit-card";

const TodoViews = ({
  todoList,
  handleDeleteTask,
  handleCompleteTask,
  handleEditClick,
  handleEditTask,
}) => {
  // let TaskCount = todoList.length;

  return todoList.map((todo) => {
    // console.log(TaskCount++);
    return (
      <div className="todo-card" key={todo.id}>
        {todo.isEditBtnClicked ? (
          <EditCard
            todo={todo}
            handleEditTask={handleEditTask}
            handleCompleteTask={handleCompleteTask}
          />
        ) : (
          <ViewCard
            todo={todo}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
            handleEditClick={handleEditClick}
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
