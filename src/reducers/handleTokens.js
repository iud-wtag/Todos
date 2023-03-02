import * as actions from "../actions/actionTypes";

const initialToken = {
  isCreateBtnClicked: false,
};

const handleTokens = (state = initialToken, action) => {
  switch (action.type) {
    case actions.HANDLE_CREATE:
      const { isCreateBtnClicked } = action.payload;
      return {
        isCreateBtnClicked: isCreateBtnClicked,
      };

    default:
      return state;
  }
};
export default handleTokens;
