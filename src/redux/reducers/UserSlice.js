import {createSlice} from "@reduxjs/toolkit";
import {fetchUsers} from "../actions/ActionCreaters";


const initialState = {
    count: 0,
    isLoading: false,
    error: "",
    users: []
}

export const userSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        increment(state, action,){
            state.count += action.payload
        }
    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action) => {
            state.isLoading = false
            state.error = ''
            state.users = action.payload
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchUsers.rejected.type]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default userSlice.reducer
