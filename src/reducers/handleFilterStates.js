import { HANDLE_FILTER } from "actions/actionTypes";
import { ALL } from "common/constants";

const initialFilter = {
  filterState: ALL,
};

const handleFilterState = (state = initialFilter, action) => {
  switch (action.type) {
    case HANDLE_FILTER:
      return {
        ...state,
        filterState: action.filterState,
      };

    default:
      return state;
  }
};

export default handleFilterState;
