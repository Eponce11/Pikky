
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface myFollowingState {
    followingId: Set<string>
}

const initialState: myFollowingState = {
    followingId: new Set()
}

export const myFollowingSlice = createSlice({
    name: 'myFollowing',
    initialState,
    reducers: {
        setMyFollowing: (state, action:PayloadAction<Array<string>>) => {
            action.payload.map( (userId) => {
                state.followingId.add(userId)
            })
        }   
    }
})

export const { setMyFollowing } = myFollowingSlice.actions

export default myFollowingSlice.reducer