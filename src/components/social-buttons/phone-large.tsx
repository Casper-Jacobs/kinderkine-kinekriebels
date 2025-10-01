import { Phone } from './phone'

export const PhoneLarge = () => {
	return (
		<span className="flex flex-row gap-2 items-center">
			<Phone />
			<span className="font-bold mb-1 text-nowrap">+32 495 79 76 50</span>
			<button
				onClick={() => navigator.clipboard.writeText('+32 495 79 76 50')}
				className="hover:cursor-pointer hover:drop-shadow-lg hover:text-stone-500 ms-2"
			>
				<svg
					className="size-4"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
					<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
				</svg>
			</button>
		</span>
	)
}
