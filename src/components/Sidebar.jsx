import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-[15%] h-screen  border-r-[1px] border-zinc-400 pt-3 '>
    <div className='ml-1 items border-b-[1px] border-zinc-400 '>
    <h5><span><i className="ri-inbox-2-line "></i></span>Inbox</h5>
    <h5 ><span><i className="ri-chat-thread-line"></i></span>Direct Messages</h5>
    <h5><span><i className="ri-list-check"></i></span>My Tasks</h5>
    <h5><span><i className="ri-bard-fill"></i></span>AI Agents</h5>
    <h5><span><i className="ri-file-list-3-line"></i></span>Chat with Anything</h5>
    <h5><span><i className="ri-time-line"></i></span>Track Time</h5>
    <h5><span><i className="ri-stack-line"></i></span>Projects</h5>
    <h5><span><i className="ri-focus-2-line"></i></span>Goals</h5>
    <h5><span><i className="ri-file-pdf-line"></i></span>Docs</h5>
    <h5> <span><i className="ri-chat-4-line"></i></span>Channels</h5>
    <h5><span><i className="ri-team-line"></i></span>Teams</h5>
    <h5><span><i className="ri-user-community-line "></i></span>Meetings</h5>
    </div>
    <button className='flex flex-col border-[2px] w-[180px] rounded-lg mt-7 p-[2px] ml-1'>Starter Plan <span className='opacity-50 text-base p-[7px]'>Upgrade Plan <i className="ri-arrow-right-up-line"></i></span></button>
    </div>
  )
}

export default Sidebar