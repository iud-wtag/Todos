import React from "react";
import PropTypes from "prop-types";

const TodoDetails = ({ list }) => {
  return (
    <>
      <h3 className="todo-header">{list.data}</h3>
      <p className="todo-createTime">Created At: {list.date}</p>
    </>
  );
};

TodoDetails.propTypes = {
  list: PropTypes.object.isRequired,
};

export default TodoDetails;
