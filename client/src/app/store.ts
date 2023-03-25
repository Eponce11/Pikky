
import { configureStore } from "@reduxjs/toolkit"
import signedInUserSlice from "../features/signedInUserSlice"
import visitedSearchedUsersSlice from "../features/visitedSearchedUsersSlice"


export const store = configureStore({
    reducer: {
        signedInUser: signedInUserSlice,
        visitedSearchedUsers: visitedSearchedUsersSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch