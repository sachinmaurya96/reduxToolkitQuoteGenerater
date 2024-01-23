import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getQuto } from "./qutoApi"

const initialState = {
    qutos:[],
    loading:false,
  
}

export const getQutoAsync = createAsyncThunk(
    "qutos/getQuto",
    async(skip)=>{
        const response = await getQuto(skip)
        return response.data
    }
)
export const qutoSlice = createSlice({
    name:"quto",
    initialState,
    reducers:{
        increment: (state) => {
            state.value += 1;
          },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getQutoAsync.pending,(state)=>{
            state.loading = true
        })
        .addCase(getQutoAsync.fulfilled,(state,action)=>{
            state.loading = false
            state.qutos = action.payload.data
            console.log(action.payload.data)
        })
        .addCase(getQutoAsync.rejected,(state)=>{
            console.log("erre ocured in getquto()")
        })
    }
})

export const selectQuto = (state)=>state.quto
export default qutoSlice.reducer