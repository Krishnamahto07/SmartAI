import { combineReducers } from "@reduxjs/toolkit";
import chatGptReducer from "../slices/chatGptSlice" 
const rootReducer = combineReducers(
    {
        chatGpt : chatGptReducer,
    }
)
export default rootReducer