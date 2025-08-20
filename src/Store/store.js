import { configureStore } from "@reduxjs/toolkit";
import userReducer from './../Reducers/userSlice';
import testSlice from "../Reducers/testSlice";
import movieReducer from "./../Reducers/movieSlice"
const appStore = configureStore({
    reducer:{
        // Add your reducers here
        user: userReducer,
        test: testSlice,
        movies: movieReducer
    }
})

export default appStore