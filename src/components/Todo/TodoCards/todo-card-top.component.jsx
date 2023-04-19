import React from "react";
import PropTypes from "prop-types";
import { formatDate } from "helpers/fortmatDate";

const TodoCardTop = ({ todo }) => {
  const { task, date } = todo;
  const formattedDate = formatDate(date);

  return (
    <div className="todo__card-view__details">
      <h3 className="todo__card-view-title">{task}</h3>
      <p className="todo__card-view-create__time">
        Created At: {formattedDate}
      </p>
    </div>
  );
};

TodoCardTop.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoCardTop;
