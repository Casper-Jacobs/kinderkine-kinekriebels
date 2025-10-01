export const Email = () => {
	const icon = (
		<svg
			className="h-7 w-7 text-white"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
			<polyline points="22,6 12,13 2,6"></polyline>
		</svg>
	)
	return (
		<a
			href="mailto:Jole.cops@telenet.be"
			target="_blank"
			className="relative inline-block hover:drop-shadow-lg hover:cursor-pointer"
		>
			<button className="rounded-full border-rounded p-2 bg-primary transition-background-image duration-300 ease-in-out">
				{icon}
			</button>
			<div className="absolute inset-0 rounded-full p-2 bg-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
				{icon}
			</div>
		</a>
	)
}
