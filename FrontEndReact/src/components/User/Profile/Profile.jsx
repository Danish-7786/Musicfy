import { useState } from "react";
import { logoutUser } from "../../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
import Cookies from "js-cookie"
import "./Profile.css"
const Profile = () => {
    const user = useSelector((state) => state.auth.userData);
    const dispatch = useDispatch();
    console.log(user);
   const userProfile = user.user.avatar;
 const [click,setClick] = useState(true)
 
 const handleLogout = async()=> {
     dispatch(logoutUser())
     try{
         const user = await axios.post("http://localhost:3000/api/v1/users/logout",{
             headers: {
                 Authorization: `Bearer ${Cookies.get("accessToken")}` 
        }
      })
      Cookies.set("accessToken",null);
}
catch(error){
    
}
}
return (
    <div>
        <div className='relative'>
        <div onClick={(e)=>setClick(!click)}>
          <img className='rounded-full border-green-400 left-10 border-[3px]' src={userProfile} alt="" width={40} height={40} />
        </div>
        <div className={`cursor-pointer absolute w-28  mt-2 right-0 text-white font-medium text-sm bg-neutral-800 shadow-md ${click ? 'hid' : 'vis'}`}>
         <div className='p-2 hover:bg-neutral-950' >My Profile</div>
         <div className='p-2 hover:bg-neutral-950' >My Playlist</div>
         <div className='p-2 hover:bg-neutral-950' onClick={handleLogout}>Log out</div>
        </div>
        </div>
    </div>
  )
}

export default Profile