import React, { useState } from "react";
import { RiPencilFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

function UserProfile() {
  const [nameEdit, setNameEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);
  return (
    <div className="bg-neutral-900 h-screen text-white flex w-full  justify-center">
      <div className="p-8 flex flex-col gap-4">
        <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
        <div className="flex items-center mb-4 relative ">
            <div className="w-full relative bg-gray-500 rounded-md overflow-hidden">
                <img src="https://via.placeholder.com/150" alt="CoverImage" />
                <button className="bg-green-500 absolute bottom-1 right-2 text-white font-semibold p-2 rounded-md">
            <RiPencilFill/>
          </button>
            </div>
            <div className="absolute bottom-[-1rem] left-[-1rem]">

          <div className="relative ">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full w-24 h-24 mr-4 border"
            />
          <button className="bg-green-500 absolute bottom-1 right-6 text-white font-semibold p-2 rounded-full">
            <RiPencilFill/>
          </button>
            </div>
            </div>
        </div>
        <div className="mt-4">
          <label className="block mb-2">Name:</label>
          <div className="w-[40rem]">
            {nameEdit ? (
                <div className="relative"> 

              <input
                type="text"
                className="bg-neutral-900 border-white/50 border-[2px] text-white rounded-md py-2 px-4 w-full"
                placeholder="Enter your name"
                value="name"
                />
                <button className="absolute right-2 top-[5px] bg-green-500 p-2 rounded-md" onClick={(e)=> setNameEdit(!nameEdit)}>{ <FaCheck/>}</button>
                                                
                </div>
            ) : (
                <div className="relative " >

                <p className="bg-neutral-900 border-white/50 border-[2px] py-2 px-4 rounded-md">
                  Name
                </p>
                <button className="absolute right-2 top-[5px] bg-green-500 p-2 rounded-md" onClick={(e)=> setNameEdit(!nameEdit)}>{ <RiPencilFill/>}</button>
                  </div>
            )}
          </div>
        </div>
        <div className="mb-4 w-full">
          <label className="block mb-2">Email:</label>
          <div>
            {emailEdit ? (
                <div className="relative ">

              <input
                type="text"
                className="bg-neutral-900 text-white rounded-md py-2 px-4 w-full border-white/50 border-[2px]"
                placeholder="Enter your name"
                value="name"
                />
                <button className="absolute right-2 top-[5px] bg-green-500 p-2 rounded-md" onClick={(e)=> setEmailEdit(!emailEdit)}>{ <FaCheck/>}</button>

                </div>
            ) : (
                <div className="relative " >

              <p className="bg-neutral-900 border-white/50 border-[2px] py-2 px-4 rounded-md">
                Email
              </p>
              <button className="absolute right-2 top-[5px] bg-green-500 p-2 rounded-md" onClick={(e)=> setEmailEdit(!emailEdit)}>{ <RiPencilFill/>}</button>
                </div>
            )}
          </div>
        </div>
        <button className="bg-green-500 text-white font-semibold py-2 px-4 w-full rounded-md">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
