import { createSlice } from "@reduxjs/toolkit"

 const initialState={
    isloggedin:false,
 }
 const loginslice=createSlice({
    name:"loginslice",
    initialState,
    reducers:{
        setloggedin:(state)=>{
            state.isloggedin=true
        },
        logout:(state)=>{
            state.isloggedin=false
        }
    }
 })
 export const {setloggedin,logout}=loginslice.actions
 const LoginReducer=loginslice.reducer
 export default LoginReducer