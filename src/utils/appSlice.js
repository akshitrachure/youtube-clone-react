import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
    },
    reducers:{
        menuToggle: (store) => {
            store.isMenuOpen = !store.isMenuOpen;
        },
        closeMenu: (store) => {
            store.isMenuOpen = false;
        }
    }
})


export const {menuToggle, closeMenu} = appSlice.actions;

export default appSlice.reducer;