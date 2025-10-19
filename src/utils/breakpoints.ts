import { useEffect, useState } from 'react'

export type ScreenSize = 'mobile' | 'tablet' | 'desktop' | 'wide'

const BREAKPOINTS = {
	mobile: 768,
	tablet: 1024,
	desktop: 1440,
} as const

export const useBreakpoints = () => {
	const [screenSize, setScreenSize] = useState<ScreenSize>('desktop')
	const [screenWidth, setScreenWidth] = useState<number>(0)

	useEffect(() => {
		const updateScreenSize = () => {
			const width = window.innerWidth
			setScreenWidth(width)

			if (width < BREAKPOINTS.mobile) {
				setScreenSize('mobile')
			} else if (width < BREAKPOINTS.tablet) {
				setScreenSize('tablet')
			} else if (width < BREAKPOINTS.desktop) {
				setScreenSize('desktop')
			} else {
				setScreenSize('wide')
			}
		}

		// Set initial size
		updateScreenSize()

		// Add event listener
		window.addEventListener('resize', updateScreenSize)

		// Cleanup
		return () => window.removeEventListener('resize', updateScreenSize)
	}, [])

	const isMobile = screenSize === 'mobile'
	const isTablet = screenSize === 'tablet'
	const isDesktop = screenSize === 'desktop'
	const isWide = screenSize === 'wide'
	const isMobileOrTablet = isMobile || isTablet
	const isDesktopOrWide = isDesktop || isWide

	return {
		screenSize,
		screenWidth,
		isMobile,
		isTablet,
		isDesktop,
		isWide,
		isMobileOrTablet,
		isDesktopOrWide,
		breakpoints: BREAKPOINTS,
	}
}
