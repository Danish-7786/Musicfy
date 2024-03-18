import React,{useEffect} from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import MainButton from "./MainButton";
import HomePageCard from "./HomePageCard";
import { loginUser } from "../../../store/authSlice";
import {useSelector,useDispatch} from "react-redux"
import Profile from "../Profile/Profile"
import Cookies from "js-cookie";
import axios from "axios"
import Song from "../Song/Song";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
const MainComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userData);
  useEffect(() => {
    async function fetchUser(){
    const accessToken =Cookies.get("accessToken");
    console.log(accessToken);
    try {
      let response = await axios.post("http://localhost:3000/api/v1/users/authenticate",
      {accessToken},{
        headers:{
          'Content-Type': 'application/json'
        }
      })
      if(response) dispatch(loginUser(response.data.data))
    } catch (error) {
     console.log(error);
    }
  }
    fetchUser()
  }, []);
  return (
    <div className="bg-neutral-900   w-full h-full rounded-md overflow-y-auto">
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
        {user ? (<Profile/>):
        (
        <div>
         <MainButton urlText="login" btnText="login" className={"text-white/80"} />
         <MainButton urlText="signup" btnText="SignUp" className={"bg-white text-black/80"} />
        </div>
        )}
        
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">

         <HomePageCard imgLink="https://i.scdn.co/image/ab67706f000000028094d49283ac9beb2d1e97cf" cardText={"Trending in India"}/>
         <HomePageCard imgLink="https://i.scdn.co/image/ab67706c0000bebb5722016e5bab71fa955fb739" cardText={"Bollywood Hits"}/>
         <HomePageCard imgLink="https://th.bing.com/th/id/OIP.P9gh2oPkWwEm1RmgUx7a4AHaHa?rs=1&pid=ImgDetMain" cardText={"Indie Pop"}/>

        </div>
</div>
        <div>
            <h3 className="text-xl text-white p-4 font-bold">Made For You</h3>
        </div>
        <div>
          <Song/>
            
        </div>

      
    </div>
  );
};

export default MainComponent;
