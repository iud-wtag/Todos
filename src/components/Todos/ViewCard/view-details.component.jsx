import React from "react";
import PropTypes from "prop-types";
import { formatDate } from "helpers/fortmatDate";

const ViewDetails = ({ todo }) => {
  const { task, date } = todo;
  const formattedDate = formatDate(date);

  return (
    <div className="todo__card-view__details">
      <h3 className="todo__card-view__details-title">{task}</h3>
      <p className="todo__card-view__details-time">
        Created At: {formattedDate}
      </p>
    </div>
  );
};

ViewDetails.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default ViewDetails;
