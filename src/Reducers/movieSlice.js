import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState: {
        nowplaying:[]
    },
    reducers:{
        addMovies:(state, action) => {
            state.nowplaying = action.payload
        }
    }
})

export default movieSlice.reducer;
export const {addMovies} = movieSlice.actions;