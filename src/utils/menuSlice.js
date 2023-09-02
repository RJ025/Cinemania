import { createSlice } from "@reduxjs/toolkit";


const menu = createSlice({
    name : "menu" ,
    initialState : {
        isMenuOpen : true ,
    } ,
    reducers : {
        toggleMenu : (state)=>{
            state.isMenuOpen = !state.isMenuOpen
        } ,
        closeMenu : (state)=>{
            state.isMenuOpen = false;
        }
    }
})

export const {toggleMenu , closeMenu} = menu.actions;
export default menu.reducer;