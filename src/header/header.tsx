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
			className={`bg-gradient-to-r from-pink-500/30 to-purple-500/30 h-1/12 transition-all duration-500 ease-in-out flex flex-col w-screen fixed z-20`}
		>
			<SideNav isOpen={sideNavVisible} onClose={() => setSideNavVisible(false)} />
			<div className="flex flex-grow flex-row justify-start items-center m-6">
				<div className="flex flex-row justify-between items-center gap-2 overflow-hidden w-full">
					<span className="flex flex-row gap-3 items-center">
						{!breakpoints.isDesktopOrWide && (
							<span>
								<HamburgerIcon
									className={`transition-colors duration-300 ${shrunk ? 'text-pink-600' : 'text-white'}`}
									onClick={() => setSideNavVisible(true)}
								/>
							</span>
						)}

						<h1
							className={`text-xl font-bold transition-all duration-300 ${shrunk ? 'text-secondary' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'}`}
						>
							Kinderkine KineKriebels
						</h1>
					</span>
				</div>
				{breakpoints.isDesktopOrWide && <NavigationItems shrunk={shrunk} />}
			</div>
		</div>
	)
}
