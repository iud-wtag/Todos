import React from "react";
import PropTypes from "prop-types";
import ViewDetails from "components/Todos/ViewCard/view-details.component";
import ViewActionBar from "components/Todos/ViewCard/view-action-bar.component";

const ViewCard = ({ todo, setIsEdit }) => {
  return (
    <>
      <ViewDetails todo={todo} />
      <ViewActionBar todo={todo} setIsEdit={setIsEdit} />
    </>
  );
};

ViewCard.propTypes = {
  todo: PropTypes.object.isRequired,
  setIsEdit: PropTypes.func.isRequired,
};

export default ViewCard;
