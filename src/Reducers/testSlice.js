import { createSlice } from "@reduxjs/toolkit";


const testSlice = createSlice({
    name: "test",
    initialState: {
        user:{}
    },
    reducers: { 
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})


export const { setUser } = testSlice.actions;
export default testSlice.reducer;