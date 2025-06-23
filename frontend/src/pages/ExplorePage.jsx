import { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import Repos from "../components/Repos";

const LANGUAGES = [
	{ id: "javascript", name: "JavaScript", icon: "/javascript.svg" },
	{ id: "typescript", name: "TypeScript", icon: "/typescript.svg" },
	{ id: "c++", name: "C++", icon: "/c++.svg" },
	{ id: "python", name: "Python", icon: "/python.svg" },
	{ id: "java", name: "Java", icon: "/java.svg" },
];

const ExplorePage = () => {
	const [loading, setLoading] = useState(false);
	const [repos, setRepos] = useState([]);
	const [selectedLanguage, setSelectedLanguage] = useState("");

	const exploreRepos = async (language) => {
		setLoading(true);
		setRepos([]);
		try {
			const res = await fetch("/api/explore/repos/" + language);
			const { repos } = await res.json();
			setRepos(repos);
			setSelectedLanguage(language);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='px-4 text-gray-200'>
			<div className='bg-glass max-w-2xl mx-auto rounded-md p-4'>
				<h1 className='text-xl font-bold text-center text-gray-100'>
					Explore Popular Repositories
				</h1>
				<div className='flex flex-wrap gap-3 my-4 justify-center'>
					{LANGUAGES.map((lang) => (
						<div
							key={lang.id}
							className={`p-2 rounded-lg cursor-pointer transition-all ${
								selectedLanguage === lang.id
									? "bg-indigo-900/30 border border-indigo-600/50"
									: "bg-gray-800/30 hover:bg-gray-700/40"
							}`}
							onClick={() => exploreRepos(lang.id)}
						>
							<img
								src={lang.icon}
								alt={`${lang.name} logo`}
								className='h-10 w-10'
							/>
							<p className='text-xs mt-1 text-center text-gray-300'>
								{lang.name}
							</p>
						</div>
					))}
				</div>
				{repos.length > 0 && (
					<h2 className='text-lg font-semibold text-center my-4 text-gray-100'>
						<span className='bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full '>
							{selectedLanguage.toUpperCase()}{" "}
						</span>
						Repositories
					</h2>
				)}
				{!loading && repos.length > 0 && <Repos repos={repos} alwaysFullWidth />}
				{loading && <Spinner />}
			</div>
		</div>
	);
};
export default ExplorePage;
