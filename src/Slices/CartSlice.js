import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    initialState: 0 ,
    name: 'CartSlice',
    reducers:{
        increase:(state , action) =>state + action.payload,
        decrease:(state , action) => state - action.payload,
        clear : () =>  0
    }
})




export const {increase , decrease , clear} = CartSlice.actions
export default CartSlice.reducer