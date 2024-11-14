import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[60px] flex justify-between items-center border-b-2'>
    <div>
    <h5 className='text-sm text-zinc-400'>Workspace</h5>
    <h4><span><i className="ri-home-3-line"></i></span>Kroolo Space </h4>
    </div>
    <div className='flex '>
    <span className='mr-[5px]'>Aman Kumar </span>
    <img src="" className='rounded-full w-[20px] h-[20px]' alt="" />
    </div>
    </div>
  )
}

export default Navbar