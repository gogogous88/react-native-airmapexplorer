import { combineReducers } from "redux";
import attrReducers from "./attrReducer";

const rootReducer = combineReducers({ attr: attrReducers });

export default rootReducer;
