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
			className={`
				relative text-nowrap text-md font-semibold
				${highlighted ? 'opacity-100' : 'opacity-80'} 
				${props.color ?? 'text-secondary'} 
				hover:cursor-pointer hover:opacity-100 
				transition-all duration-300 ease-in-out
				${highlighted ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current after:rounded-full' : ''}
				hover:scale-105
			`}
		>
			{props.text}
		</a>
	)
}
