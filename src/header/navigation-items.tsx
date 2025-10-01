import { HeaderItem } from "../components/navigation-item";

interface NavigationItemsProps {
	orientation?: 'horizontal' | 'vertical';
	color?: string;
}
export const NavigationItems = (props: NavigationItemsProps) => {
	return (
		<div className={`flex ${props.orientation === 'vertical' ? 'flex-col justify-center items-start' : 'flex-row justify-center items-center'} gap-6`}>
			<HeaderItem text="Home" link="home" color={props.color} />
			<HeaderItem text="Over KineKriebels" link="about" color={props.color} />
			<HeaderItem text="Psychomotoriek" link="psychomotoriek" color={props.color} />
			<HeaderItem text="Praktisch" link="praktisch" color={props.color} />
			<HeaderItem text="Contact" link="contact" color={props.color} />
		</div>
	)
}
