
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface visitedSearchedUsersState {
    users: Array<userBasicInfo>
}

interface userBasicInfo {
    username: string | undefined;
    profilePicture: string | null | undefined;
}

const initialState: visitedSearchedUsersState = {
    users: []
}

export const visitedSearchedUsersSlice = createSlice({
    name: 'visitedSearchedUsers',
    initialState,
    reducers: {
        addUser: (state, action:PayloadAction<userBasicInfo>) => {
            state.users.push(action.payload)
        },
        removeUser: (state, action:PayloadAction<number>) => {
            state.users.splice(action.payload, 1)
        }
    }
})

export const { addUser, removeUser } = visitedSearchedUsersSlice.actions

export default visitedSearchedUsersSlice.reducer