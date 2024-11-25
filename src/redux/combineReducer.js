import { combineReducers } from "@reduxjs/toolkit";
import authSlice from './auth/authSlice'
import locationSlice from './location/locationSlice'
const rootReducer = combineReducers({
    location:locationSlice,
    auth:authSlice,
})

export default rootReducer