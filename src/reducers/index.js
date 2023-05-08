import todoReducers from "reducers/todoReducers";
import buttonClickReducers from "reducers/buttonClickReducers";
import errorReducers from "reducers/errorReducers";
import currentPageReducer from "reducers/currentPageReducer";
import todoFilterReducers from "reducers/todoFilterReducers";
import loaderReducers from "reducers/loaderReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducers,
  errorReducers,
  buttonClickReducers,
  currentPageReducer,
  todoFilterReducers,
  loaderReducers,
});

export default rootReducer;
