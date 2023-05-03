import { HANDLE_FILTER } from "actions/actionTypes";
import { FILTER_STATE_ALL } from "common/constants";

const initialFilter = {
  filterState: FILTER_STATE_ALL,
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
