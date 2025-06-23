import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import Search from "../components/Search";
import SortRepos from "../components/SortRepos";
import Spinner from "../components/Spinner";

const HomePage = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortType, setSortType] = useState("recent");

    const getUserProfileAndRepos = useCallback(
        async (username = "codexdhruv11") => {
            setLoading(true);
            try {
                const userRes = await fetch(`https://api.github.com/users/${username}`);
                const userProfile = await userRes.json();
                if (userProfile.message) throw new Error(userProfile.message);

                const reposRes = await fetch(
                    `https://api.github.com/users/${username}/repos?per_page=100`
                );
                let repos = await reposRes.json();
                if (!Array.isArray(repos)) throw new Error(repos.message || "Failed to fetch repos");

                repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setRepos(repos);
                setUserProfile(userProfile);

                return { userProfile, repos };
            } catch (error) {
                setRepos([]);
                setUserProfile(null);
                toast.error(error.message || "Failed to fetch data from GitHub.");
                return { userProfile: null, repos: [] };
            } finally {
                setLoading(false);
            }
        },
        []
    );

    useEffect(() => {
        getUserProfileAndRepos();
    }, [getUserProfileAndRepos]);

    const onSearch = async (e, username) => {
        e.preventDefault();
        setSortType("recent");
        await getUserProfileAndRepos(username);
    };

    const onSort = (sortType) => {
        let sortedRepos = [...repos];
        if (sortType === "recent") {
            sortedRepos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        } else if (sortType === "stars") {
            sortedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
        } else if (sortType === "forks") {
            sortedRepos.sort((a, b) => b.forks_count - a.forks_count);
        }
        setSortType(sortType);
        setRepos(sortedRepos);
    };

    return (
        <div className='max-w-7xl mx-auto px-4 text-gray-200'>
            <div className='mb-6'>
                <Search onSearch={onSearch} />
            </div>
            
            {loading ? (
                <div className='flex justify-center py-12'>
                    <Spinner />
                </div>
            ) : (
                <>
                    {repos.length > 0 && (
                        <div className='mb-4'>
                            <SortRepos onSort={onSort} sortType={sortType} />
                        </div>
                    )}
                    
                    <div className='flex flex-col lg:flex-row gap-6'>
                        {userProfile && (
                            <div className='lg:w-1/3 w-full'>
                                <ProfileInfo userProfile={userProfile} />
                            </div>
                        )}
                        
                        <div className='flex-1 w-full'>
                            <Repos repos={repos} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
export default HomePage;
