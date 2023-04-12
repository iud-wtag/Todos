import todoReducers from "reducers/todoReducers";
import handleButtonClick from "reducers/handleButtonClick";
import handleCurrentPage from "reducers/handleCurrentPage";
import handleFilterState from "reducers/handleFilterStates";
import handleLoader from "reducers/handleLoader";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducers,
  handleButtonClick,
  handleCurrentPage,
  handleFilterState,
  handleLoader,
});

export default rootReducer;
