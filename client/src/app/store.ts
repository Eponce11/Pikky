
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist"
import thunk from 'redux-thunk'


import signedInUserSlice from "../features/signedInUserSlice"
import visitedSearchedUsersSlice from "../features/visitedSearchedUsersSlice"
import myFollowingSlice from "../features/myFollowingSlice"


const reducers = combineReducers({
    signedInUser: signedInUserSlice,
    visitedSearchedUsers: visitedSearchedUsersSlice,
    myFollowers: myFollowingSlice
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch