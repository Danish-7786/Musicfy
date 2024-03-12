import React from 'react'
import ReactDOM from 'react-dom/client'
import {createRoutesFromElements,RouterProvider,createBrowserRouter,Route,Routes} from "react-router-dom"
import './index.css'
import { Layout } from './Layout.jsx'
import MainComponent from './components/User/MainComponent/MainComponent.jsx'
import Login from './components/User/Login/Login.jsx'
import Signup from './components/User/signup/Signup.jsx'
import AdminSignup from './components/Admin/Signup/AdminSignup.jsx'
import HomePage from "./components/Admin/HomePage/HomePage.jsx"
import {store }from "./store/store.js"
import {Provider} from 'react-redux'
import AddSong from './components/Admin/AddSong/AddSong.jsx'
import AdminLogin from './components/Admin/Login/AdminLogin.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<MainComponent />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup/>} />
      <Route path="admin" element= {<HomePage/>}/>
      <Route path="admin/AddSong" element= {<AddSong/>}/>
      <Route path="admin/signup" element= {<AdminSignup/>}/>
      <Route path="admin/login" element= {<AdminLogin/>}/>
    </Route>
  )
)
 


ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>


  <RouterProvider router= {router}/>

    
    </Provider>
 ,
)
