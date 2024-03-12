import React, { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { allSong } from "../../../store/songSlice";
import { useDispatch, useSelector } from "react-redux";
import SongCard from "./SongCard";
const Song = () => {
  const songs = useSelector((state) => state.song.songs);
  console.log(songs);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchSong(){
    try {
      const accessToken = Cookies.get("accessToken");
      let response = await axios.get(
        "http://localhost:3000/api/v1/song/all-song",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response) {
        const song = response.data.data;
        console.log(song);
        dispatch(allSong(song));
      }
    } catch (error) {
      console.log(error);
    }
  }
  fetchSong();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4 ">
      {songs.map((song) => (
        <SongCard key={song._id} artist ={song.createdBy[0]} songCover={song.songCover} songName ={song.songName} songFile={song.songFile}/>
      ))}
    </div>
  );
};

export default Song;
