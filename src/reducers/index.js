import todoReducers from "./todoReducers";
import handleTokens from "./handleTokens";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducers,
  handleTokens,
});

export default rootReducer;
