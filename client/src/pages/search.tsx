
import Navbar from "../components/navbar"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import SearchIconBlack from "../static/icon-search-black.svg"
import { searchForUser } from "../functions/api"
import DefaultProfilePicture from "../static/icon-profile-pic.svg"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { addUser, removeUser } from "../features/visitedSearchedUsersSlice"

interface SearchedUser {
    username: string;
    profilePicture: string | null;
}

type SearchedUserOrNull = SearchedUser | null;

const Search = () => {

    const [username, setUsername] = useState<string>('');
    const [searchedUser, setSearchedUser] = useState<SearchedUserOrNull>(null);
    const [error, setError] = useState<string>('Search A User');
    const visitedUsers = useAppSelector( (state) => state.visitedSearchedUsers.users)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()


    const handleSearch = async (e:React.MouseEvent<HTMLElement>): Promise<void> => {
        e.preventDefault();
        try {
            const potentialUser = await searchForUser(username)
            setSearchedUser(potentialUser);
        } catch (err:any) {
            setError(err)
        }
    }

    const handleAddUserToVisitedArray = (e:React.MouseEvent<HTMLElement>): void => {
        e.preventDefault()
        const potentialVisitedUser = visitedUsers.find( (user) => user.username === searchedUser?.username)
        if (!potentialVisitedUser) {
            dispatch(addUser({
                username: searchedUser?.username,
                profilePicture: searchedUser?.profilePicture
            }))
        }
        navigate(`/user/${searchedUser?.username}`)
    }

    return (
        <div className="flex flex-col h-screen">
            <div className="flex items-center p-2 bg-gradient-to-r from-primary-purple to-secondary-purple">
                    <div className="searchField">
                        <img src={ SearchIconBlack } alt="Search" onClick={ handleSearch } />
                        <input type="text" name='password' placeholder="Search" value={username} onChange={ (e) =>  setUsername(e.target.value)} required/>
                    </div>
            </div>
            <div className="p-2 border-solid border-x-0 border-t-0 border-b-[1px] border-border-grey">
                {
                    searchedUser ? 
                        <li className="flex items-center justify-between">
                            <div className="flex items-center">
                                {
                                    searchedUser.profilePicture ?
                                        <img src={ searchedUser.profilePicture } alt="" className="w-10 h-10 rounded-full" /> :
                                        <img src={ DefaultProfilePicture } alt="" className="w-10 h-10 rounded-full"/>
                                }
                                <h4 className="ml-3" onClick={ handleAddUserToVisitedArray }>{ searchedUser.username }</h4>
                            </div>
                            <span
                                onClick={ () => {
                                        setError('Search A User');
                                        setSearchedUser(null);
                                    }
                                } 
                            >
                                x
                            </span>
                        </li> :
                        <p>{ error }</p>
                }
                
            </div>
            <ul className="px-2 grow">
                {
                    visitedUsers.map( (user, idx) => {
                        return (
                            <li key={idx} className="flex items-center justify-between py-2">
                                <div className="flex items-center">
                                    {
                                        user.profilePicture ?
                                            <img src={ user.profilePicture } alt="" className="w-10 h-10 rounded-full"/> :
                                            <img src={ DefaultProfilePicture } alt="" className="w-10 h-10 rounded-full"/>
                                    }
                                    <h4 className="ml-3" onClick={ () => { navigate(`/user/${user.username}`) } }>{ user.username }</h4>
                                </div>
                                <p onClick={ () => { dispatch(removeUser(idx)) } } >x</p>
                            </li>
                        )
                    })
                }
            </ul>
            <Navbar/>
        </div>
    )
}


export default Search;