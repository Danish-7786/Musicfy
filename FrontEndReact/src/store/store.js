import {configureStore} from '@reduxjs/toolkit'
import authSlice from "./authSlice"
import songSlice from './songSlice'
import adminSlice from './adminSlice'
export const store = configureStore({
    reducer:{
        auth:authSlice,
        admin:adminSlice,
        song:songSlice,
    }
})