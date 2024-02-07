import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import MainButton from "./MainButton";
import HomePageCard from "./HomePageCard";

const MainComponent = () => {
  return (
    <div className="bg-neutral-900 w-full h-full rounded-md overflow-hidden">
      <div className="bg-gradient-to-b from-emerald-800 to-emerald-500/0 flex flex-col gap-4 p-4">
        <div className="flex justify-between ">
        <div className="flex gap-2 p-[6px] h-12">
          <button className="bg-black/80 text-white p-2 rounded-full ">
            <IoIosArrowBack size={20} />
          </button>
          <button className="bg-black/80 text-white p-2 rounded-full">
            <IoIosArrowForward size={20} />
          </button>
        </div>
        <div>
          <MainButton urlText="login" btnText="login" className={"text-white/80"} />
          <MainButton urlText="signup" btnText="SignUp" className={"bg-white text-black/80"} />
        </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        <HomePageCard imgLink="https://i.scdn.co/image/ab67706f000000028094d49283ac9beb2d1e97cf" cardText={"Trending in India"}/>
        <HomePageCard imgLink="https://i.scdn.co/image/ab67706c0000bebb5722016e5bab71fa955fb739" cardText={"Bollywood Hits"}/>
           <HomePageCard imgLink="https://th.bing.com/th/id/OIP.P9gh2oPkWwEm1RmgUx7a4AHaHa?rs=1&pid=ImgDetMain" cardText={"Indie Pop"}/>

        </div>

        <div>
            <h3 className="text-xl text-white">Made For You</h3>
        </div>
        <div>
            
        </div>

      </div>
    </div>
  );
};

export default MainComponent;
