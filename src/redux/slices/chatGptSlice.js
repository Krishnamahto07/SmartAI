import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    response : "hii how are you",
};

const chatGptSlice = createSlice(
    {
        name:"chatGpt",
        initialState:initialState,
        reducers:{
            setResponse(state,value){
                state.response = value.payload;
            }
        }
    }
)
export const {setResponse} = chatGptSlice.actions;
export default chatGptSlice.reducer;