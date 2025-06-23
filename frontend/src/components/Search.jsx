import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Search = ({ onSearch }) => {
    const [username, setUsername] = useState("");

    return (
        <form className='max-w-xl mx-auto' onSubmit={(e) => onSearch(e, username)}>
            <div className='relative'>
                <div className='absolute inset-y-0 start-0 flex items-center z-10 ps-3 pointer-events-none'>
                    <IoSearch className='w-5 h-5 text-gray-400' />
                </div>
                <input
                    type='search'
                    className='block w-full p-4 ps-10 text-sm rounded-lg bg-gray-900/30 border border-gray-700/50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-900/50 text-gray-200 placeholder-gray-500'
                    placeholder='Search GitHub username...'
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button
                    type='submit'
                    className='text-white absolute end-2.5 bottom-2.5 bg-gradient-to-r from-indigo-700 to-purple-800 hover:from-indigo-600 hover:to-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-all'
                >
                    Search
                </button>
            </div>
        </form>
    );
};
export default Search;
