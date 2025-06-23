const SortRepos = ({ onSort, sortType }) => {
	const BUTTONS = [
		{ type: "recent", text: "Most Recent" },
		{ type: "stars", text: "Most Stars" },
		{ type: "forks", text: "Most Forks" },
	];

	return (
		<div className='mb-2 flex justify-center lg:justify-end'>
			{BUTTONS.map((button) => (
				<button
					key={button.type}
					type='button'
					className={`py-2 px-4 text-xs font-medium rounded-lg transition-colors ${
						button.type == sortType
							? "bg-indigo-800/50 text-white"
							: "bg-gray-800/30 text-gray-300 hover:bg-gray-700/40 hover:text-gray-200"
					}`}
					onClick={() => onSort(button.type)}
				>
					{button.text}
				</button>
			))}
		</div>
	);
};
export default SortRepos;
