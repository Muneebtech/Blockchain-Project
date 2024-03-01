import { combineReducers } from "@reduxjs/toolkit";
import ethereumReducer from "./EthereumSlice";

const rootReducer = combineReducers({
  ethereum: ethereumReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
