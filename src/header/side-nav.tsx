import CrossIcon from "./cross-icon";
import { NavigationItems } from "./navigation-items";

interface SideNavProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SideNav = (props: SideNavProps) => {
	return (
		<div className={`absolute left-0 top-0 z-30 w-64 bg-black shadow-md h-full min-h-screen ${props.isOpen ? 'block' : 'hidden'} transition-all duration-500 ease-in-out`}>
			<div className="flex flex-col gap-5 p-4 text-white">
                <button onClick={props.onClose} className="bg-gray-700 size-10"><CrossIcon className="text-white size-full" /></button>
				<NavigationItems orientation="vertical" color="text-primary" />
			</div>
		</div>
	);
}
