import { useLocation, useNavigate } from 'react-router-dom'

interface HeaderItemProps {
	text: string
	link?: string
	onClick?: () => void
	color?: string
	onNavigate?: () => void
}
export const HeaderItem = (props: HeaderItemProps) => {
	const navigate = useNavigate()
	const location = useLocation()

	const highlighted = props.link && location.pathname.includes(props.link)

	return (
		<button
			type="button"
			onClick={() => {
				if (props.onClick) props.onClick()
				else if (props.link) navigate(props.link)
				props.onNavigate?.()
			}}
			className={`
				relative text-nowrap text-[15px] font-semibold tracking-wide
				${props.color ?? 'text-gray-700'} 
				cursor-pointer bg-transparent border-none
				transition-all duration-300 ease-in-out
				hover:text-pink-600
				pb-1
				after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-pink-500 after:rounded-full after:transition-all after:duration-300
				${highlighted ? 'text-pink-600 after:w-full' : 'after:w-0 hover:after:w-full'}
			`}
		>
			{props.text}
		</button>
	)
}
