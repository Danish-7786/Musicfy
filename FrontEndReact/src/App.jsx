import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import MainComponent from './components/MainComponent/MainComponent.jsx'
function App() {

  return (
    <>
    <div className='bg-black w-screen h-screen flex p-2 gap-2'>
    <div className='min-w-40 resize-x max-w-72  cursor-pointer'>
    <Sidebar/>
    </div>
    <main className='w-full' >
      <MainComponent/>
          </main>
    </div>

    </>
  )
}

export default App
