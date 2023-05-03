import todoReducers from "reducers/todoReducers";
import buttonClickReducers from "reducers/buttonClickReducers";
import errorReducers from "reducers/errorReducers";
import currentPageReducer from "reducers/currentPageReducer";
import handleFilterState from "reducers/handleFilterStates";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducers,
  errorReducers,
  buttonClickReducers,
  currentPageReducer,
  handleFilterState,
});

export default rootReducer;
