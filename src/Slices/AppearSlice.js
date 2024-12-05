import { createSlice } from "@reduxjs/toolkit"

const AppearSlice = createSlice({
    initialState:false , 
    name:'AppearSlice' , 
    reducers: {
        setAppear:(state , action)=>{
            return action.payload
        },
    }
})

export const {setAppear } = AppearSlice.actions
export default AppearSlice.reducer