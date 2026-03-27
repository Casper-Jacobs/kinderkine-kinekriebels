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
			<div
				className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-20 transition-opacity duration-300 ${
					props.isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
				}`}
				onClick={props.onClose}
				aria-hidden={!props.isOpen}
			/>

			{/* Side Navigation */}
			<div
				className={`fixed left-0 top-0 z-30 w-80 max-w-[calc(100vw-2rem)] bg-white shadow-2xl h-full min-h-screen transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${props.isOpen ? 'translate-x-0' : '-translate-x-full'}`}
			>
				<div className="flex flex-col gap-8 p-8">
					<div className="flex items-center justify-between">
						<span className="text-xl font-bold text-gray-900 tracking-tight">
							Kine<span className="gradient-text">Kriebels</span>
						</span>
						<button
							onClick={props.onClose}
							className="p-2 rounded-xl bg-pink-50 hover:bg-pink-100 transition-colors duration-200 size-10 flex items-center justify-center"
						>
							<CrossIcon className="text-pink-600 size-5" />
						</button>
					</div>
					<div className="border-t border-gray-100 pt-6">
						<NavigationItems orientation="vertical" onNavigate={props.onClose} />
					</div>
				</div>
			</div>
		</>
	)
}
