import { configureStore, createReducer } from "@reduxjs/toolkit";

const store=configureStore({
    reducer:{
        cart:createReducer,

    }
})
export default store