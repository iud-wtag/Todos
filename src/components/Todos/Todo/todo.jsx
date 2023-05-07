import React, { useState } from "react";
import PropTypes from "prop-types";
import ViewCard from "components/Todos/ViewCard/view-card";
import EditCard from "components/Todos/EditCard/edit-card";

const Todo = ({ todo }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="todo__card-view" key={todo.id}>
      {isEdit ? (
        <EditCard todo={todo} setIsEdit={setIsEdit} />
      ) : (
        <ViewCard todo={todo} setIsEdit={setIsEdit} />
      )}
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default Todo;
