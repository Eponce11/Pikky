
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface myFollowersState {
    followersId: Set<string>
}

const initialState: myFollowersState = {
    followersId: new Set()
}

export const myFollowersSlice = createSlice({
    name: 'myFollowersSlice',
    initialState,
    reducers: {
        setMyFollowers: (state, action:PayloadAction<Array<string>>) => {
            action.payload.map( (userId) => {
                state.followersId.add(userId)
            })
        }   
    }
})

export const { setMyFollowers } = myFollowersSlice.actions

export default myFollowersSlice.reducer