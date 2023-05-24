import todoReducers from "reducers/todoReducers";
import buttonClickReducers from "reducers/buttonClickReducers";
import currentPageReducer from "reducers/currentPageReducer";
import filterReducers from "reducers/filterReducers";
import loaderReducers from "reducers/loaderReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducers,
  buttonClickReducers,
  currentPageReducer,
  filterReducers,
  loaderReducers,
});

export default rootReducer;
