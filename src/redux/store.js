import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";
import appReducer from "./reducers/AppSlice";
import authReducer from "./reducers/AuthSlice";

const rootReducer = combineReducers({
    users: userReducer,
    app: appReducer,
    auth: authReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
