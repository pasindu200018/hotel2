import { apiSlice } from "./apiSlice";

const USERS_URL = "/auth"


export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        register: (builder.mutation)({
            query: (data)=>({
                url:`${USERS_URL}/register`,
                method: "POST",
                body: data,
            })
        })
    })
})