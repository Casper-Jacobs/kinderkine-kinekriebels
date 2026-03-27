import homeBottom from '../assets/home-bottom.png'
import topBackground from '../assets/top-background.png'

export const Contact = () => {
	return (
		<div className="flex flex-col items-center">
			{/* Hero */}
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

			{/* Intro */}
			<div className="w-full section-warm">
				<div className="max-w-4xl mx-auto page-section">
					<div className="animate-fadeInUp">
						<div className="accent-line mb-6"></div>
						<h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
							Contact
						</h1>
						<p className="text-xl text-gray-500 leading-relaxed">
							Heb je een vraag of wil je een afspraak maken? Ik help je graag verder!
						</p>
					</div>

					<div
						className="animate-fadeInUp mt-8 space-y-3"
						style={{ animationDelay: '0.1s' }}
					>
						<p className="text-lg leading-relaxed text-gray-600">
							Ben je op zoek naar ondersteuning voor je kind of heb je vragen over de
							therapie? Wil je graag kennismaken of een eerste afspraak inplannen?
						</p>
						<p className="text-lg leading-relaxed text-gray-600">
							Klik dan op de knop hieronder en vul het formulier in. Ik neem zo snel
							mogelijk contact met je op om verder af te spreken.
						</p>
					</div>
				</div>
			</div>

			{/* CTA Button */}
			<div className="w-full bg-white">
				<div className="max-w-4xl mx-auto page-section">
					<div
						className="cta-section animate-fadeInUp"
						style={{ animationDelay: '0.15s' }}
					>
						<p className="font-display text-2xl font-semibold text-gray-900 mb-6">
							Maak een afspraak
						</p>
						<button
							className="btn-primary"
							onClick={() => {
								window.open(
									'https://docs.google.com/forms/d/e/1FAIpQLSdaM1rW6rMda9j4tG3F1rBoFtBJRcXRqHWUXiKotCKsNW0CNA/viewform',
									'_blank',
									'noopener,noreferrer'
								)
							}}
						>
							Vul het formulier in
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
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Direct Contact */}
			<div className="w-full section-warm">
				<div className="max-w-4xl mx-auto page-section">
					<div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
						<h2 className="font-display font-bold text-2xl mb-6 text-center text-gray-900">
							Of neem rechtstreeks contact op
						</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<a
								href="mailto:info@kinekriebels.be"
								className="info-card flex items-center gap-4 hover:border-pink-200 transition-colors group"
							>
								<span className="text-3xl group-hover:scale-110 transition-transform">
									📧
								</span>
								<div>
									<p className="font-bold text-gray-900">E-mail</p>
									<p className="text-gray-500">info@kinekriebels.be</p>
								</div>
							</a>
							<a
								href="tel:+32471671826"
								className="info-card flex items-center gap-4 hover:border-pink-200 transition-colors group"
							>
								<span className="text-3xl group-hover:scale-110 transition-transform">
									📱
								</span>
								<div>
									<p className="font-bold text-gray-900">Telefoon</p>
									<p className="text-gray-500">0471/ 67 18 26</p>
								</div>
							</a>
						</div>
					</div>

					<div
						className="cta-section mt-12 animate-fadeInUp"
						style={{ animationDelay: '0.25s' }}
					>
						<p className="text-xl font-semibold text-gray-900">
							Ik kijk ernaar uit om jullie te ontmoeten bij{' '}
							<span className="gradient-text font-bold">KineKriebels</span>!
						</p>
					</div>
				</div>
			</div>

			{/* Bottom illustration */}
			<div className="py-8 bg-white w-full flex justify-center">
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
