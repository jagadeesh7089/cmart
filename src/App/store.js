import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/auth";
import { setupListeners } from "@reduxjs/toolkit/query";
import LoginReducer from "../features/User/Loginslice";

export const store=configureStore({
    reducer:{
        auth:LoginReducer,
        [authApi.reducerPath]:authApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(authApi.middleware),
    
})
setupListeners(store.dispatch)