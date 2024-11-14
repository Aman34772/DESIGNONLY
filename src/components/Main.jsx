import React from "react";

const Main = () => {
  return (
    <div className="w-full h-screen px-5 pt-5">
      <div className="top flex items-center justify-between ">
        <div className="topleft">
          <h4>
            Projects <span className="rounded-full">1</span>
          </h4>
          <h5 className="opacity-60">
            Manage all projects within this Workspace.
          </h5>
        </div>
        <div className="topright">
          <div className="flex gap-6">
            <button className="px-6 py-2 rounded hover:bg-blue-300 border">
              <span>
                <i className="ri-upload-cloud-2-line mr-1"></i>
              </span>
              Import Project
            </button>
            <button className="px-6 py-2 rounded bg-blue-500 hover:bg-blue-400 border">
              <span>
                <i className="ri-add-line"></i>
              </span>
              Create Project
            </button>
          </div>
        </div>
      </div>
      <div className="middle mt-7 flex justify-between">
        <h4 className="text-lg w-[70px] border-b-[3px] border-blue-800 ">
          <span>
            <i className="ri-list-check mr-1"></i>
          </span>
          List
        </h4>
        <div className="flex gap-6">
        
        <div className="relative w-full max-w-xs">
        <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
        <input
          type="text"
          placeholder="Search project"
          className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 placeholder-gray-500"
        />
      </div>
          <button className="border rounded-lg py-2 px-3">
            <span>
              <i className="ri-filter-3-line mr-1"></i>
            </span>
            Filters
          </button>
        </div>
      </div>
      <div className="bottom border-y flex justify-between text-zinc-400 mt-2">
      <h5 className=" text-[15px]">Project name</h5>
      <div className="flex gap-5 px-10">
      <h5>Status</h5>
      <h5>Priority</h5>
      <h5>Start date</h5>
      <h5>End date</h5>
      <h5>Task Progress</h5>
      <h5>Owner</h5>
      </div>
      
      </div>
      <button className="px-2 py-2 rounded text-zinc-500  mt-1">
              <span>
                <i className="ri-add-line"></i>
              </span>
              Create Project
            </button>
    </div>
  );
};

export default Main;
