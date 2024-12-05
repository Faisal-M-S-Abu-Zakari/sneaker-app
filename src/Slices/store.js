import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "./CartSlice"
import AppearSlice from "./AppearSlice"
export const store = configureStore({
    reducer : {
         Cart :CartSlice , 
         appear : AppearSlice
    }
})