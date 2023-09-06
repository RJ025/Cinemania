import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";


const store = configureStore({
    reducer : {
        menu : menuSlice ,
        searchCache : searchSlice ,
        chat : chatSlice
    }
})

export default store;