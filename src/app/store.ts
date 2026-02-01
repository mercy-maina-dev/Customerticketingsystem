import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {  persistReducer, persistStore } from "redux-persist";
import { customersAPI } from "../features/auth/customersAPI";
import storage  from "redux-persist/es/storage"
import { loginAPI } from "../features/auth/loginAPI";
import customerSlice from '../features/auth/customerSlice'
import { ticketsAPI } from "../features/tickets/ticketsAPI";
import { agentsAPI } from "../features/agents/agentsAPI";
const persistConfig = {
  key: "customerstore",
  version: 1,
  storage,
  whitelist:['customer']
};

const rootReducer = combineReducers({
  [customersAPI.reducerPath]: customersAPI.reducer,
  [loginAPI.reducerPath]: loginAPI.reducer,
  [ticketsAPI.reducerPath]:ticketsAPI.reducer,
   [agentsAPI.reducerPath]: agentsAPI.reducer,
  customer:customerSlice
});

export const  persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
  .concat(customersAPI.middleware)
  .concat(loginAPI.middleware)
  .concat(ticketsAPI.middleware)
  .concat(agentsAPI.middleware),
});

export const persistedstore = persistStore(store)
export type RootState = ReturnType<typeof store.getState>

