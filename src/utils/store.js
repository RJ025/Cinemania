import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import themeSlice from "./themeSlice";


const store = configureStore({
    reducer : {
        menu : menuSlice ,
        searchCache : searchSlice ,
        chat : chatSlice ,
        theme : themeSlice
    }
})

export default store;