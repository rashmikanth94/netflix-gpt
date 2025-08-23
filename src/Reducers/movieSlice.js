import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState: {
        nowplaying:[]
    },
    reducers:{
        addMovies:(state, action) => {
            state.nowplaying = action.payload
        },
        addPopularMovies:(state, action) => {
            state.popular = action.payload
        },
        addUpcomingMovies:(state, action) => {
            state.upcoming = action.payload
        },
        addTopRatedMovies:(state, action) => {
            state.topRated = action.payload
        }
    }
})

export default movieSlice.reducer;
export const {addMovies, addPopularMovies, addUpcomingMovies, addTopRatedMovies} = movieSlice.actions;