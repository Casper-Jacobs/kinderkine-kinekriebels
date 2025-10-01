export const Phone = () => {
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
			<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
		</svg>
	)
	return (
		<a
			href="tel:+32495797650"
			target="_blank"
			className="relative inline-block hover:drop-shadow-lg hover:cursor-pointer"
		>
			<button className="rounded-full border-rounded p-2 bg-primary transition-background-image duration-300 ease-in-out">
				{icon}
			</button>
			<div className="absolute inset-0 rounded-full p-2 bg-[#25d366] opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
				{icon}
			</div>
		</a>
	)
}
