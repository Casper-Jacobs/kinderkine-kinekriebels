import { useEffect, useRef, useState } from 'react'
import { useBreakpoints } from '../utils/breakpoints'
import HamburgerIcon from './hamburger-icon'
import { NavigationItems } from './navigation-items'
import { SideNav } from './side-nav'

interface HeaderProps {
	contentRef: React.RefObject<HTMLDivElement | null>
}

export const Header = (props: HeaderProps) => {
	const breakpoints = useBreakpoints()
	const [shrunk, setShrunk] = useState(false)
	const [sideNavVisible, setSideNavVisible] = useState<boolean>(false)

	const headerRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const contentElement = props.contentRef.current
		const handleScroll = () => {
			if (contentElement) {
				if (contentElement.scrollTop > 10) {
					setShrunk(true)
				} else {
					setShrunk(false)
				}
			}
		}
		if (contentElement) contentElement.addEventListener('scroll', handleScroll)
		return () => {
			if (contentElement) contentElement.removeEventListener('scroll', handleScroll)
		}
	}, [props.contentRef])

	return (
		<div
			ref={headerRef}
			className={`transition-all duration-300 ease-in-out flex flex-col w-full sticky top-0 z-20 border-b border-gray-200 ${
				shrunk ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
			}`}
		>
			<SideNav isOpen={sideNavVisible} onClose={() => setSideNavVisible(false)} />
			<div className="flex flex-row justify-between items-center px-6 md:px-12 py-4 md:py-5">
				<div className="flex flex-row items-center gap-3">
					{!breakpoints.isDesktopOrWide && (
						<button
							onClick={() => setSideNavVisible(true)}
							className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors"
						>
							<HamburgerIcon className="text-gray-900" />
						</button>
					)}

					<h1 className="text-xl md:text-2xl font-bold text-gray-900">KineKriebels</h1>
				</div>
				{breakpoints.isDesktopOrWide && <NavigationItems />}
			</div>
		</div>
	)
}
