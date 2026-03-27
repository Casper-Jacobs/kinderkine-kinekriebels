import { HeaderItem } from '../components/navigation-item'

interface NavigationItemsProps {
	orientation?: 'horizontal' | 'vertical'
	color?: string
	onNavigate?: () => void
}
export const NavigationItems = (props: NavigationItemsProps) => {
	const color = props.color

	return (
		<nav
			className={`flex ${props.orientation === 'vertical' ? 'flex-col justify-center items-start gap-5' : 'flex-row justify-center items-center gap-8'}`}
		>
			<HeaderItem text="Home" link="home" color={color} onNavigate={props.onNavigate} />
			<HeaderItem text="Wie ben ik" link="about" color={color} onNavigate={props.onNavigate} />
			<HeaderItem text="Psychomotoriek" link="psychomotoriek" color={color} onNavigate={props.onNavigate} />
			<HeaderItem text="Praktisch" link="praktisch" color={color} onNavigate={props.onNavigate} />
			<HeaderItem text="Contact" link="contact" color={color} onNavigate={props.onNavigate} />
		</nav>
	)
}
