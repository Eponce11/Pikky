
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'




export interface signedInUserState {
    id: string,
    username: string,
    profilePicture: string | null
}

const initialState: signedInUserState = {
    id: "",
    username: "",
    profilePicture: null
}

export const signedInUserSlice = createSlice({
    name: 'signedInUser',
    initialState,
    reducers: {
        setSignedInUser: (state, action:PayloadAction<signedInUserState>) => {
            state.id = action.payload.id
            state.username = action.payload.username
            state.profilePicture = action.payload.profilePicture
        }
    }
})

export const { setSignedInUser } = signedInUserSlice.actions

export default signedInUserSlice.reducer