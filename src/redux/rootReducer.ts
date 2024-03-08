import { combineReducers } from "@reduxjs/toolkit";
import ethereumReducer from "./EthereumSlice"; //file naming convention error

const rootReducer = combineReducers({
  ethereum: ethereumReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
