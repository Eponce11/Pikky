
import { configureStore } from "@reduxjs/toolkit"
import signedInUserSlice from "../features/signedInUserSlice"


export const store = configureStore({
    reducer: {
        signedInUser: signedInUserSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch