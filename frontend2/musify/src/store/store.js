import {configureStore} from '@reduxjs/toolkit'
import authSlice from "./authSlice"
import adminSlice from './adminSlice'
import  musicSlice  from './musicSlice'


export const store = configureStore({
    reducer:{
        auth:authSlice,
        admin:adminSlice,
        music :musicSlice,
    }
})