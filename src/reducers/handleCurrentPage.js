import { HANDLE_CURRENT_PAGE } from "actions/actionTypes";

const initialPage = {
  currentPage: 1,
};

const handleCurrentPage = (state = initialPage, action) => {
  switch (action.type) {
    case HANDLE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    default:
      return state;
  }
};
export default handleCurrentPage;
