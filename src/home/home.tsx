import { useNavigate } from 'react-router-dom'
import homeBottom from '../assets/home-bottom.png'
import kineKriebels from '../assets/kine-kriebels.png'
import topBackground from '../assets/top-background.png'

export const Home = () => {
	const navigate = useNavigate()

	return (
		<div className="flex flex-col items-center">
			{/* Hero Section */}
			<div className="relative w-full page-hero">
				<div className="pt-16">
					<img
						src={topBackground}
						className="w-full h-auto object-cover"
						alt="Background"
						loading="eager"
					/>
				</div>
			</div>

			{/* Logo */}
			<div className="relative -mt-8 md:-mt-12 z-10 px-4">
				<img
					src={kineKriebels}
					className="h-[40vh] md:h-[50vh] mx-auto drop-shadow-2xl animate-scaleIn"
					alt="KineKriebels logo"
				/>
			</div>

			{/* Welcome Section */}
			<div className="w-full section-warm">
				<div className="max-w-4xl mx-auto page-section">
					<div className="animate-fadeInUp">
						<div className="accent-line mb-6"></div>
						<h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
							Welkom bij <span className="gradient-text">KineKriebels</span>!
						</h1>
						<p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
							Waar bewegen plezier wordt en elk kind mag groeien op zijn eigen tempo.
						</p>
					</div>

					<div
						className="animate-fadeInUp space-y-5 mt-12"
						style={{ animationDelay: '0.1s' }}
					>
						<p className="text-lg md:text-xl leading-relaxed text-gray-600">
							Bij <span className="font-semibold text-gray-900">KineKriebels</span>{' '}
							draait alles rond kinderen en hun unieke ontwikkeling. Sommige kinderen
							hebben wat extra ondersteuning nodig in hun motoriek, evenwicht,
							concentratie of zelfvertrouwen – en daar help ik graag bij.
						</p>
						<p className="text-lg md:text-xl leading-relaxed text-gray-600">
							Als gespecialiseerde kinesitherapeut in{' '}
							<span className="font-semibold text-gray-900">
								psychomotoriek bij kinderen
							</span>
							, bied ik begeleiding op maat, afgestemd op de noden van jouw kind. Dat
							doen we op een speelse, positieve en veilige manier – met kriebels voor
							beweging, spel en groei!
						</p>
					</div>
				</div>
			</div>

			{/* Features Grid */}
			<div className="w-full bg-white">
				<div className="max-w-4xl mx-auto page-section">
					<div className="animate-fadeInUp" style={{ animationDelay: '0.15s' }}>
						<h2 className="font-display font-bold text-3xl md:text-4xl mb-10 text-gray-900">
							Wat mag je verwachten?
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="feature-card">
								<span className="text-4xl mb-4 block">🏡</span>
								<h3 className="font-bold text-lg text-gray-900 mb-2">
									Warme omgeving
								</h3>
								<p className="text-gray-500 leading-relaxed">
									Een kindvriendelijke ruimte waar iedereen zich welkom voelt
								</p>
							</div>
							<div className="feature-card">
								<span className="text-4xl mb-4 block">🎮</span>
								<h3 className="font-bold text-lg text-gray-900 mb-2">
									Therapie in spelvorm
								</h3>
								<p className="text-gray-500 leading-relaxed">
									Aangepast aan de leeftijd en interesses van je kind
								</p>
							</div>
							<div className="feature-card">
								<span className="text-4xl mb-4 block">🌟</span>
								<h3 className="font-bold text-lg text-gray-900 mb-2">
									Succesgerichte aanpak
								</h3>
								<p className="text-gray-500 leading-relaxed">
									Ruimte voor plezier, succeservaringen en zelfvertrouwen
								</p>
							</div>
							<div className="feature-card">
								<span className="text-4xl mb-4 block">💬</span>
								<h3 className="font-bold text-lg text-gray-900 mb-2">
									Open communicatie
								</h3>
								<p className="text-gray-500 leading-relaxed">
									Transparante samenwerking met ouders
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Quote */}
			<div className="w-full section-warm">
				<div className="max-w-4xl mx-auto page-section">
					<div className="quote-block animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
						<p className="text-lg md:text-xl leading-relaxed text-gray-700">
							Of het nu gaat om moeilijkheden met fijne motoriek, evenwicht, aandacht
							of zelfbeeld – bij KineKriebels werken we samen aan{' '}
							<span className="font-semibold text-gray-900">
								kleine stapjes die grote sprongen mogelijk maken
							</span>
							.
						</p>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="w-full bg-white">
				<div className="max-w-4xl mx-auto page-section">
					<div
						className="cta-section animate-fadeInUp"
						style={{ animationDelay: '0.25s' }}
					>
						<p className="font-display text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
							Benieuwd of ik iets voor jouw kind kan betekenen?
						</p>
						<p className="text-lg text-gray-600 mb-8">
							Neem gerust contact op – ik help jullie graag verder!
						</p>
						<button
							className="btn-primary"
							onClick={() => navigate('/contact')}
						>
							Neem contact op
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Bottom illustration */}
			<div className="py-8">
				<img
					src={homeBottom}
					className="h-[25vh] mx-auto"
					alt="Decoratie"
					loading="lazy"
				/>
			</div>
		</div>
	)
}
