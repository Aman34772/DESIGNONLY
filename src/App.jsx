import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

const App = () => {
  return (
    <div className='w-full h-screen bg-[#FFFFFF] p-[5px]'>
      <Navbar/>
      <div className='flex'>
      <Sidebar/>
      <Main/>
      </div>
      
    </div>
  )
}

export default App