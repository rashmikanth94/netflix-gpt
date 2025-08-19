import { configureStore } from "@reduxjs/toolkit";
import userReducer from './../Reducers/userSlice';
import testSlice from "../Reducers/testSlice";

const appStore = configureStore({
    reducer:{
        // Add your reducers here
        user: userReducer,
        test: testSlice
    }
})

export default appStore