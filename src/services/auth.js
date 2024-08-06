import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi=createApi({
    reducerPath:'authApi',
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:4000/users",}),
    endpoints:(builder)=>({
        login:builder.mutation({
           query:(user)=>{
            return {
                url:'/',
                method:"POST",
                body:user
            }
           },
        }),
        
    }),
})
export const {useLoginMutation}=authApi;