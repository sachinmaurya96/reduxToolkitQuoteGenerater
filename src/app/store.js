import { configureStore } from "@reduxjs/toolkit";
import reducer from "../feature/qutoSlice"

export const store = configureStore({
    reducer:{
        quto:reducer
    }
})