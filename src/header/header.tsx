import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBreakpoints } from '../utils/breakpoints'
import HamburgerIcon from './hamburger-icon'
import { NavigationItems } from './navigation-items'
import { SideNav } from './side-nav'

export const Header = () => {
	const breakpoints = useBreakpoints()
	const [shrunk, setShrunk] = useState(false)
	const [sideNavVisible, setSideNavVisible] = useState(false)
	const navigate = useNavigate()
	const headerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleScroll = () => setShrunk(window.scrollY > 10)
		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<>
			<SideNav isOpen={sideNavVisible} onClose={() => setSideNavVisible(false)} />
			<header
				ref={headerRef}
				className={`transition-all duration-300 ease-in-out flex flex-col w-full fixed top-0 z-20 ${
					shrunk
						? 'bg-white/90 backdrop-blur-md shadow-lg shadow-black/[0.04]'
						: 'bg-white/70 backdrop-blur-sm'
				}`}
			>
				<div
					className={`flex flex-row justify-between items-center px-6 md:px-12 transition-all duration-300 ${
						shrunk ? 'py-3' : 'py-4 md:py-5'
					}`}
				>
					<div className="flex flex-row items-center gap-3">
						{!breakpoints.isDesktopOrWide && (
							<button
								onClick={() => setSideNavVisible(true)}
								className="p-2 -ml-2 hover:bg-pink-50 rounded-xl transition-colors cursor-pointer"
								aria-label="Menu openen"
							>
								<HamburgerIcon className="text-gray-900" />
							</button>
						)}
						<button
							onClick={() => navigate('/home')}
							className="hover:opacity-80 transition-opacity cursor-pointer"
						>
							<span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
								Kine<span className="gradient-text">Kriebels</span>
							</span>
						</button>
					</div>
					{breakpoints.isDesktopOrWide && <NavigationItems />}
				</div>
			</header>
		</>
	)
}
