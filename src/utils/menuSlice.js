import { createSlice } from "@reduxjs/toolkit";


const menu = createSlice({
    name : "menu" ,
    initialState : {
        isMenuOpen : true ,
    } ,
    reducers : {
        toggleMenu : (state)=>{
            state.isMenuOpen = !state.isMenuOpen
        }
    }
})

export const {toggleMenu} = menu.actions;
export default menu.reducer;