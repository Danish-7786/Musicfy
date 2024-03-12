import {createSlice} from "@reduxjs/toolkit"
const initialState = {
  currSong:{
  songName:"",
  artist:"",
  index= 0,
  isFavourite : false,
  songFile:"",
 songDuration:"",
 songPlayed:false,
  },
 songList:[],
}

export const musicSlice = createSlice({
  name:"music",
  initialState,
  reducers: {
    playPauseSong:(state,action)=> {
      state.songPlayed = !(state.songPlayed);
    },
    addSongtoList :(state,action)=> {
     state.songList = action.song;
    },
    playNext :(state,action)=> {
      if(state.currSong.index == state.songList.length-1){
     state.currSong = state.songList[0];
         
      }
      else{

        state.currSong = state.songList[index+1];
      }

    },
    playPrevious :(state,action)=> {
      if(state.currSong.index == 0){
      const length = state.songList.length-1;
     state.currSong = state.songList[length];
      }
      else{
        state.currSong = state.songList[index-1];
      }

    },
    addFavourite: (state,action)=> {
      
    }
  }
})