import aboutBottom from '../assets/about-bottom.png'
import mainBgAbout from '../assets/main-bg-about.png'
import myrthe from '../assets/myrthe.png'

export const About = () => {
	document.title = 'Wie ben ik – KineKriebels'
	return (
		<div className="flex flex-col items-center">
			{/* Hero */}
			<div className="relative w-full page-hero">
				<div className="pt-16">
					<img
						src={mainBgAbout}
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
							Wie ben ik?
						</h1>
						<p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
							Hallo! Ik ben Myrthe, kinesitherapeut met een hart voor kinderen.
						</p>
					</div>
				</div>
			</div>

			{/* Photo + Intro text */}
			<div className="w-full bg-white">
				<div className="max-w-4xl mx-auto page-section">
					<div className="flex flex-col md:flex-row gap-10 items-start">
						<div className="w-full md:w-3/5 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
							<p className="text-lg leading-relaxed text-gray-600">
								Elke dag mag ik kinderen ondersteunen in hun groei – fysiek,
								emotioneel en motorisch. Ik werk als kinesitherapeut in het{' '}
								<span className="font-bold text-gray-900">
									buitengewoon onderwijs
								</span>
								, waar ik kinderen begeleid met verschillende
								ontwikkelingsnoden. Daar heb ik geleerd dat elk kind uniek is,
								en dat kleine stapjes vaak de grootste vooruitgang betekenen.
							</p>
						</div>
						<div className="w-full md:w-2/5 md:sticky md:top-28 animate-fadeInUp" style={{ animationDelay: '0.15s' }}>
							<img
								src={myrthe}
								className="w-full rounded-2xl shadow-lg"
								alt="Myrthe"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Passie */}
			<div className="w-full section-warm">
				<div className="max-w-4xl mx-auto page-section">
					<div className="quote-block animate-fadeInUp" style={{ animationDelay: '0.15s' }}>
						<div className="flex items-center gap-3 mb-4">
							<span className="text-3xl">🎪</span>
							<h2 className="font-display font-bold text-2xl text-gray-900">
								Mijn passie
							</h2>
						</div>
						<p className="text-lg leading-relaxed text-gray-600">
							Mijn passie voor het werken met kinderen begon al veel vroeger.
							Als kind zat ik jarenlang bij de{' '}
							<span className="font-bold text-gray-900">Chiro</span> – eerst
							als lid, later als leiding. Nadien gaf ik ook{' '}
							<span className="font-bold text-gray-900">Kazou-kampen</span>,
							waar spel, verbondenheid en plezier centraal stonden. Die
							ervaringen neem ik vandaag nog elke dag mee in mijn werk: een
							veilige omgeving creëren waar kinderen zichzelf mogen zijn,
							durven bewegen en vol vertrouwen kunnen groeien.
						</p>
					</div>
				</div>
			</div>

			{/* KineKriebels */}
			<div className="w-full bg-white">
				<div className="max-w-4xl mx-auto page-section">
					<div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
						<div className="flex items-center gap-3 mb-4">
							<span className="text-3xl">💝</span>
							<h2 className="font-display font-bold text-2xl text-gray-900">
								KineKriebels
							</h2>
						</div>
						<p className="text-lg leading-relaxed text-gray-600">
							Met{' '}
							<span className="font-bold text-gray-900">KineKriebels</span>{' '}
							wil ik een warme plek aanbieden waar therapie speels, persoonlijk
							en op maat gebeurt. Waar kinderen kunnen ontdekken wat ze wél
							kunnen en waar ze met kleine succesjes grote sprongen maken.
						</p>
					</div>
				</div>
			</div>

			{/* Bottom illustration */}
			<div className="py-8 section-warm w-full flex justify-center">
				<img
					src={aboutBottom}
					className="h-[25vh] mx-auto"
					alt="Decoratie"
					loading="lazy"
				/>
			</div>
		</div>
	)
}
