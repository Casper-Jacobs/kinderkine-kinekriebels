interface MediaProps {
	index: number
	src: string
}

export const Media = (props: MediaProps) => {
	return (
		<div
			key={props.index}
			className="rounded-2xl w-full sm:w-1/3 sm:hover:w-1/2 md:w-1/5 md:hover:w-2/6 h-3/4 hover:h-5/6 overflow-hidden flex-shrink-0 transition-all duration-300 ease-in-out"
		>
			{props.src.endsWith('.mp4') ? (
				<video className="object-cover w-full h-full" autoPlay loop muted playsInline>
					<source src={props.src} type="video/mp4" />
				</video>
			) : (
				<img
					className="object-cover w-full h-full"
					src={props.src}
					alt={`Media ${props.index}`}
				/>
			)}
		</div>
	)
}
