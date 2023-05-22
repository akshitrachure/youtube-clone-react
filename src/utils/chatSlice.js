import { createSlice } from "@reduxjs/toolkit";
import { CHAT_COUNT } from "./constants"; 

const chatSlice = createSlice({
    name: 'chat',
    initialState:{
        messages:[],
    },
    reducers:{
        addMessage: (store, action) => {
            store.messages.splice(CHAT_COUNT,1);
            store.messages.push(action.payload);
        }
    }
})

export const {addMessage} = chatSlice.actions;

export default chatSlice.reducer;