import { HANDLE_CREATE, HANDLE_EDIT } from "actions/actionTypes";

const initialButton = {
  isCreateBtnClicked: false,
  isEditBtnClicked: false,
};

const handleButtonClick = (state = initialButton, action) => {
  switch (action.type) {
    case HANDLE_CREATE:
      const { isCreateBtnClicked } = action.payload;
      return {
        isCreateBtnClicked: isCreateBtnClicked,
      };

    case HANDLE_EDIT:
      const { isEditBtnClicked } = action.payload;
      return {
        isEditBtnClicked: isEditBtnClicked,
      };

    default:
      return state;
  }
};
export default handleButtonClick;
