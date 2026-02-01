
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ApiDomain } from "../../utils/ApiDomains";
import Login from "../../components/Login/Login";

export  type TLoginResponse ={
    message:string,
    token:string,
    customer: {
        customer_id:number,
        first_name:string,
        last_name:string,
        email:string,
        phone_number:string,
        role:string
    }
}
type LoginInputs ={
    email:string;
    password:string;
}

export const loginAPI = createApi({
    reducerPath: 'loginAPI',
    baseQuery: fetchBaseQuery({baseUrl:ApiDomain}),
    tagTypes:['Login'],
    endpoints:(builder)=>({
        loginCustomer:builder.mutation<TLoginResponse,LoginInputs>({
           query:(loginData)=>({
            url: '/login',
            method:'POST',
            body: loginData
           }),
           invalidatesTags:['Login']
               
           
        })
    })
})