import Repo from "./Repo";
import { FaRegStar } from "react-icons/fa6";
import { FaCodeFork } from "react-icons/fa6";

const Repos = ({ repos, alwaysFullWidth = false }) => {
	const className = alwaysFullWidth ? "w-full" : "lg:w-2/3 w-full";

	return (
		<div className={`${className} bg-glass rounded-lg px-8 py-6`}>
			<ol className='relative border-s border-gray-200'>
				{repos.map((repo) => (
					<li
						key={repo.id}
						className='mb-6 p-4 bg-gray-800/20 rounded-xl border border-gray-700/30 hover:border-gray-600/50 transition-colors'
					>
						<div className='flex justify-between items-start'>
							<div>
								<a
									href={repo.html_url}
									className='text-indigo-300 hover:text-indigo-200 font-medium'
									target='_blank'
									rel='noopener noreferrer'
								>
									{repo.name}
								</a>
								<p className='text-sm text-gray-400 mt-1'>
									{repo.description || "No description"}
								</p>
							</div>
							<div className='flex gap-2'>
								<span className='flex items-center gap-1 text-xs bg-gray-800/40 px-2 py-1 rounded'>
									<FaRegStar /> {repo.stargazers_count}
								</span>
								<span className='flex items-center gap-1 text-xs bg-gray-800/40 px-2 py-1 rounded'>
									<FaCodeFork /> {repo.forks_count}
								</span>
							</div>
						</div>
					</li>
				))}
				{repos.length === 0 && <p className='flex items-center justify-center h-32 '>No repos found</p>}
			</ol>
		</div>
	);
};
export default Repos;
