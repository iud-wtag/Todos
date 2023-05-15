import todoReducers from "reducers/todoReducers";
import buttonClickReducers from "reducers/buttonClickReducers";
import errorReducers from "reducers/errorReducers";
import currentPageReducer from "reducers/currentPageReducer";
import filterReducers from "reducers/filterReducers";
import loaderReducers from "reducers/loaderReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducers,
  errorReducers,
  buttonClickReducers,
  currentPageReducer,
  filterReducers,
  loaderReducers,
});

export default rootReducer;
