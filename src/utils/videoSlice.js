import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState:{
        description:{},
        videoDesc:{},
    },
    reducers:{
        getDescription: (store, action) => {
            const objKey =Object.keys(action?.payload);
            const objValue =Object.values(action?.payload);
            store.description[objKey[0]] = objValue[0];
        },
        getVideoDescription: (store, action) => {
            const objKey =Object.keys(action?.payload);
            const objValue =Object.values(action?.payload);
            store.videoDesc[objKey[0]] = objValue[0];
        }
    }
})

export const {getDescription, getVideoDescription} = videoSlice.actions;

export default videoSlice.reducer;