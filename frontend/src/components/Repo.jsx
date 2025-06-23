import { FaCodeBranch, FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { formatDate } from "../utils/functions";
import { PROGRAMMING_LANGUAGES } from "../utils/constants";
import toast from "react-hot-toast";

const Repo = ({ repo }) => {
	const formattedDate = formatDate(repo.created_at);

	const handleCloneClick = async (repo) => {
		try {
			await navigator.clipboard.writeText(repo.clone_url);
			toast.success("Repo URL cloned to clipboard");
		} catch (error) {
			toast.error("Clipboard write failed. ");
		}
	};

	return (
		<li className='mb-6 p-4 bg-gray-800/20 rounded-xl border border-gray-700/30 hover:border-gray-600/50 transition-colors text-gray-200'>
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
					<p className='text-sm text-gray-300 mt-1'>
						{repo.description || "No description"}
					</p>
				</div>
				<div className='flex gap-2'>
					<span className='flex items-center gap-1 text-xs bg-gray-800/40 px-2 py-1 rounded text-gray-100'>
						<FaRegStar /> {repo.stargazers_count}
					</span>
					<span className='flex items-center gap-1 text-xs bg-gray-800/40 px-2 py-1 rounded text-gray-100'>
						<FaCodeFork /> {repo.forks_count}
					</span>
				</div>
			</div>

			<div className='flex justify-between items-center mt-3'>
				<div>
					<time className='text-xs text-gray-500'>Created on {formattedDate}</time>
				</div>
				<div className='flex items-center gap-2'>
					{PROGRAMMING_LANGUAGES[repo.language] && (
						<img
							src={PROGRAMMING_LANGUAGES[repo.language]}
							alt='Programming language icon'
							className='h-5'
						/>
					)}
					<button
						onClick={() => handleCloneClick(repo)}
						className='flex items-center gap-1 text-xs bg-gray-800/40 hover:bg-gray-700/60 px-2 py-1 rounded transition-colors text-gray-100'
					>
						<FaCopy /> Clone
					</button>
				</div>
			</div>
		</li>
	);
};
export default Repo;
