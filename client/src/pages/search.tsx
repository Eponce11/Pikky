
import Navbar from "../components/navbar"
import { useState } from "react"
import SearchIconBlack from "../static/icon-search-black.svg"
import { searchForUser } from "../functions/api"

interface SearchedUser {
    username: string;
}

type SearchedUserOrNull = SearchedUser | null;

const Search = () => {

    const [username, setUsername] = useState<string>('');
    const [searchedUser, setSearchedUser] = useState<SearchedUserOrNull>(null);
    const [error, setError] = useState<string>('Search A User');

    const temp = [0, 0, 0, 0];

    const handleSearch = async (e:React.MouseEvent<HTMLElement>): Promise<void> => {
        e.preventDefault();
        try {
            const potentialUser: SearchedUser = await searchForUser(username)
            setSearchedUser(potentialUser);
        } catch (err:any) {
            setError(err)
        }
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
                                <div className="bg-[red] rounded-full h-10 aspect-square"/>
                                <h4 className="ml-3">Username</h4>
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
                    temp.map( (user, idx) => {
                        return (
                            <li key={idx} className="flex items-center justify-between py-2">
                                <div className="flex items-center">
                                    <div className="bg-[red] rounded-full h-10 aspect-square"/>
                                    <h4 className="ml-3">Username</h4>
                                </div>
                                <p>x</p>
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