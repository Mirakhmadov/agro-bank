import {createSlice} from "@reduxjs/toolkit";
import {getToken} from "../actions/ActionCreaters";


const initialState = {
    count: 0,
    isLoading: false,
    error: "",
    user: {},
    isAuthenticated: false,
    token: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        increment(state, action,){
            state.count += action.payload
        }
    },
    extraReducers: {
        [getToken.fulfilled.type]: (state, {payload}) => {
            state.isLoading = false
            state.error = ''

            state.user = payload.user
            state.token = payload.token
            state.isAuthenticated = true

            localStorage.setItem("token", payload.token)
        },
        [getToken.pending.type]: (state) => {
            state.isLoading = true
        },
        [getToken.rejected.type]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
            state.isAuthenticated = false

            localStorage.removeItem("token")
        }
    }
})

export default authSlice.reducer
