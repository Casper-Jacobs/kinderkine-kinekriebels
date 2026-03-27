import { useNavigate } from 'react-router-dom'

export const Footer = () => {
	const navigate = useNavigate()

	const navLinks = [
		{ text: 'Home', link: '/home' },
		{ text: 'Wie ben ik', link: '/about' },
		{ text: 'Psychomotoriek', link: '/psychomotoriek' },
		{ text: 'Praktisch', link: '/praktisch' },
		{ text: 'Contact', link: '/contact' },
	]

	return (
		<footer className="bg-footer-bg text-footer-text">
			<div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-16">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
					{/* Brand */}
					<div>
						<h2 className="text-xl font-bold text-white mb-4 tracking-tight">
							Kine<span className="text-pink-400">Kriebels</span>
						</h2>
						<p className="text-sm text-gray-400 leading-relaxed">
							Gespecialiseerde kinderkinesitherapie in psychomotoriek. Waar bewegen
							plezier wordt.
						</p>
					</div>

					{/* Navigation */}
					<div>
						<h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
							Navigatie
						</h3>
						<ul className="space-y-2.5">
							{navLinks.map((item) => (
								<li key={item.link}>
									<button
										type="button"
										onClick={() => navigate(item.link)}
										className="text-sm text-gray-400 hover:text-pink-400 cursor-pointer transition-colors duration-200"
									>
										{item.text}
									</button>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
							Contact
						</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="mailto:info@kinekriebels.be"
									className="text-sm text-gray-400 hover:text-pink-400 transition-colors duration-200 flex items-center gap-2"
								>
									<span>📧</span> info@kinekriebels.be
								</a>
							</li>
							<li>
								<a
									href="tel:+32471671826"
									className="text-sm text-gray-400 hover:text-pink-400 transition-colors duration-200 flex items-center gap-2"
								>
									<span>📱</span> 0471/ 67 18 26
								</a>
							</li>
							<li className="text-sm text-gray-400 flex items-center gap-2">
								<span>📍</span> Katteweidelaan 84, 3590 Diepenbeek
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-xs text-gray-500">
						© {new Date().getFullYear()} KineKriebels. Alle rechten voorbehouden.
					</p>
					<div className="flex items-center gap-4">
						<a
							href="https://www.instagram.com/kinekriebels"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-500 hover:text-pink-400 transition-colors"
							aria-label="Instagram"
						>
							<svg className="w-5 h-5" viewBox="0 0 448 512" fill="currentColor">
								<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
							</svg>
						</a>
						<a
							href="https://www.facebook.com/kinekriebels"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-500 hover:text-pink-400 transition-colors"
							aria-label="Facebook"
						>
							<svg className="w-5 h-5" viewBox="0 0 310 310" fill="currentColor">
								<path d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
