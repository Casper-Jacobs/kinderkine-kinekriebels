import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import { About } from './about/about'
import { Contact } from './contact/contact'
import { Footer } from './footer/footer'
import { Header } from './header/header'
import { Home } from './home/home'
import { Praktisch } from './praktisch/praktisch'
import { Psychomotoriek } from './psychomotoriek/psychomotoriek'
import { useEffect } from 'react'

const ScrollToTop = () => {
	const { pathname } = useLocation()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
	return null
}

function App() {
	return (
		<div className="flex flex-col min-h-screen w-screen bg-cream font-lato overflow-x-hidden">
			<Router>
				<ScrollToTop />
				<Header />
				<main className="flex-grow">
					<Routes>
						<Route path="home" element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="psychomotoriek" element={<Psychomotoriek />} />
						<Route path="praktisch" element={<Praktisch />} />
						<Route path="contact" element={<Contact />} />
						<Route path="/*" element={<Navigate to="/home" />} />
					</Routes>
				</main>
				<Footer />
			</Router>
		</div>
	)
}

export default App
