import { HeaderItem } from '../components/navigation-item'

interface NavigationItemsProps {
	orientation?: 'horizontal' | 'vertical'
	color?: string
	shrunk?: boolean
}
export const NavigationItems = (props: NavigationItemsProps) => {
	const defaultColor = 'text-gray-900'
	const color = props.color ?? defaultColor

	return (
		<div
			className={`flex ${props.orientation === 'vertical' ? 'flex-col justify-center items-start' : 'flex-row justify-center items-center'} gap-6`}
		>
			<HeaderItem text="Home" link="home" color={color} />
			<HeaderItem text="Over KineKriebels" link="about" color={color} />
			<HeaderItem text="Psychomotoriek" link="psychomotoriek" color={color} />
			<HeaderItem text="Praktisch" link="praktisch" color={color} />
			<HeaderItem text="Contact" link="contact" color={color} />
		</div>
	)
}
