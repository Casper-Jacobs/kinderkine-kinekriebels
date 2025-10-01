import { useLocation, useNavigate } from 'react-router-dom'

interface HeaderItemProps {
	text: string
	link?: string
	onClick?: () => void
	color?: string
}
export const HeaderItem = (props: HeaderItemProps) => {
	const navigate = useNavigate()
	const location = useLocation()

	const highlighted = props.link && location.pathname.includes(props.link)

	return (
		<a
			onClick={() => {
				if (props.onClick) props.onClick()
				else if (props.link) navigate(props.link)
			}}
			className={`text-nowrap text-md ${highlighted ? 'opacity-100' : 'opacity-70'} ${props.color ?? 'text-secondary'} hover:drop-shadow-lg hover:cursor-pointer hover:opacity-100 transition-all duration-200 ease-in-out`}
		>
			{props.text}
		</a>
	)
}
