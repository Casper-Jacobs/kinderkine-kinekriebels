export const HamburgerIcon = (props: { className?: string; onClick?: () => void }) => {
	return (
		<svg
			className={props.className}
			width="24px"
			height="24px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onClick={props.onClick}
		>
			<path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
			<path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
			<path d="M20 17L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
		</svg>
	)
}

export default HamburgerIcon
