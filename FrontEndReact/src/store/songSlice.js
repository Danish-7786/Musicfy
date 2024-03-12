
import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    songs:[],

}
export const songSlice = createSlice({
    name:"song",
    initialState,
    reducers: {
        allSong: (state,action)=> {
            state.songs = action.payload;
    }
}
})

export default songSlice.reducer;
export const {allSong} = songSlice.actions;