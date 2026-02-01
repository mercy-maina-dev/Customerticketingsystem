import { createSlice } from "@reduxjs/toolkit";

export type CustomerState={
    token:string | null;
    customer:{
        customer_ID: number;
        FN:string;
        LN:string;
        email:string;
        PN:String;
        role:string;
    } | null;
}

const initialState:CustomerState={
    token:null,
    customer:null
}
const customerSlice=createSlice({
    name:'customer',
    initialState,
    reducers:{
        loginSuccess:(state,action)=>{
            state.token=action.payload.token;
            state.customer=action.payload.customer
        },
        logout:(state)=>{
            state.token=null;
            state.customer=null;
        }
    }
})
export const {loginSuccess,logout}=customerSlice.actions
export default customerSlice.reducer