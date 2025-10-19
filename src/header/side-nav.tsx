import CrossIcon from './cross-icon'
import { NavigationItems } from './navigation-items'

interface SideNavProps {
	isOpen: boolean
	onClose: () => void
}

export const SideNav = (props: SideNavProps) => {
	return (
		<>
			{/* Backdrop */}
			{props.isOpen && (
				<div
					className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 transition-opacity duration-300"
					onClick={props.onClose}
				/>
			)}

			{/* Side Navigation */}
			<div
				className={`fixed left-0 top-0 z-30 w-80 bg-gradient-to-b from-pink-500 to-purple-600 shadow-2xl h-full min-h-screen transform transition-transform duration-500 ease-in-out ${props.isOpen ? 'translate-x-0' : '-translate-x-full'}`}
			>
				<div className="flex flex-col gap-8 p-6 text-white">
					<div className="flex items-center justify-between">
						<h2 className="text-2xl font-bold">Menu</h2>
						<button
							onClick={props.onClose}
							className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 size-12 flex items-center justify-center"
						>
							<CrossIcon className="text-white size-6" />
						</button>
					</div>
					<div className="border-t border-white/30 pt-6">
						<NavigationItems orientation="vertical" color="text-white" />
					</div>
				</div>
			</div>
		</>
	)
}
