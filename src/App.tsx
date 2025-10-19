import { useRef } from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { About } from './about/about'
import { Contact } from './contact/contact'
import { Header } from './header/header'
import { Home } from './home/home'
import { Praktisch } from './praktisch/praktisch'
import { Psychomotoriek } from './psychomotoriek/psychomotoriek'

function App() {
	const contentRef = useRef<HTMLDivElement | null>(null)

	return (
		<div className="flex flex-col h-screen w-screen bg-transparent font-lato">
			<Router>
				<Header contentRef={contentRef} />
				<div ref={contentRef} className="flex-grow overflow-x-hidden overflow-y-scroll">
					<Routes>
						<Route path="home" element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="psychomotoriek" element={<Psychomotoriek />} />
						<Route path="praktisch" element={<Praktisch />} />
						<Route path="contact" element={<Contact />} />
						<Route path="/*" element={<Navigate to="/home" />} />
					</Routes>
				</div>
			</Router>
		</div>
	)
}

export default App
