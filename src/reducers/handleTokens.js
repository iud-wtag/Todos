import * as actionType from "actions/actionTypes";

const initialToken = {
  isCreateBtnClicked: false,
  isEditBtnClicked: false,
};

const handleTokens = (state = initialToken, action) => {
  switch (action.type) {
    case actionType.HANDLE_CREATE:
      const { isCreateBtnClicked } = action.payload;
      return {
        isCreateBtnClicked: isCreateBtnClicked,
      };

    case actionType.HANDLE_EDIT:
      const { isEditBtnClicked } = action.payload;
      return {
        isEditBtnClicked: isEditBtnClicked,
      };

    default:
      return state;
  }
};
export default handleTokens;
