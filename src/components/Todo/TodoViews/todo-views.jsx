import React from "react";
import PropTypes from "prop-types";
import IncompleteTask from "components/Todo/TodoViews/incomplete-task.component";
import CompletedTask from "components/Todo/TodoViews/completed-task.component";
import TodoDetails from "components/Todo/TodoViews/todo-details.component";
import EditCard from "components/Todo/EditCard/edit-card";

const TodoViews = ({
  todoList,
  handleDeleteTask,
  handleCompleteTask,
  handleEditClick,
  handleEditTask,
}) => {
  return todoList.map((list) => {
    return (
      <div className="todo-card todo-view-card" key={list.id}>
        {list.isEditBtnClicked ? (
          <EditCard
            handleEditTask={handleEditTask}
            taskID={list.id}
            taskData={list.data}
          />
        ) : (
          <>
            <TodoDetails list={list} />
            {list.isTaskComplete ? (
              <CompletedTask
                handleDeleteTask={handleDeleteTask}
                completeTime={list.completeTime}
                taskID={list.id}
              />
            ) : (
              <IncompleteTask
                handleDeleteTask={handleDeleteTask}
                handleCompleteTask={handleCompleteTask}
                handleEditClick={handleEditClick}
                taskID={list.id}
                startDate={list.date}
              />
            )}
          </>
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
