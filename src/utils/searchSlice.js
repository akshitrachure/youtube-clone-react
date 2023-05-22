import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState:{
        searchObj:{}
    },
    reducers:{
        cacheResults: (store, action) => {
            const objKey =Object.keys(action?.payload);
            const objValue =Object.values(action?.payload);
            console.log(objValue);
            store.searchObj[objKey[0]] = objValue[0];
        }
    }
})


export const {cacheResults} = searchSlice.actions;

export default searchSlice.reducer;