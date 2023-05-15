import todoReducers from "reducers/todoReducers";
import buttonClickReducers from "reducers/buttonClickReducers";
import errorReducers from "reducers/errorReducers";
import currentPageReducer from "reducers/currentPageReducer";
import filterReducers from "reducers/filterReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducers,
  errorReducers,
  buttonClickReducers,
  currentPageReducer,
  filterReducers,
});

export default rootReducer;
