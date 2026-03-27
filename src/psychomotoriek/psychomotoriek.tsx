import psyBottom from '../assets/psy-bottom.png'
import psyTopBg from '../assets/psy-top-bg.png'

interface TherapyDomainProps {
	emoji: string
	title: string
	symptoms: string[]
	description: React.ReactNode
	delay: string
}

const TherapyDomain = ({ emoji, title, symptoms, description, delay }: TherapyDomainProps) => (
	<div className="therapy-card animate-fadeInUp" style={{ animationDelay: delay }}>
		<div className="flex items-center gap-4 mb-5">
			<span className="text-3xl">{emoji}</span>
			<h2 className="font-display font-bold text-xl text-gray-900">{title}</h2>
		</div>
		<div className="bg-blush-50 rounded-xl p-4 mb-4 border border-pink-100/50">
			<p className="font-semibold mb-2 text-gray-700 text-sm">Herken je dit?</p>
			<ul className="space-y-1.5">
				{symptoms.map((symptom, i) => (
					<li key={i} className="flex items-start gap-2">
						<span className="text-pink-400 mt-0.5 text-sm">●</span>
						<span className="text-gray-600 text-[15px]">{symptom}</span>
					</li>
				))}
			</ul>
		</div>
		<p className="leading-relaxed text-gray-600">{description}</p>
	</div>
)

export const Psychomotoriek = () => {
	document.title = 'Psychomotoriek – KineKriebels'
	const domains: Omit<TherapyDomainProps, 'delay'>[] = [
		{
			emoji: '✍️',
			title: 'Fijne motoriek & schrijven',
			symptoms: [
				'Moeite met knippen, tekenen, kleuren of schrijven?',
				'Onrijpe pengreep, te veel spanning of traag tempo?',
			],
			description: (
				<>
					<span className="font-bold text-gray-900">Samen oefenen we</span>{' '}
					schrijfmotoriek, pengreep en fijne handvaardigheden via leuke, kindvriendelijke
					spelletjes en technieken.
				</>
			),
		},
		{
			emoji: '🦶',
			title: 'Grove motoriek & coördinatie',
			symptoms: [
				'Moeite met springen, lopen, evenwicht of balvaardigheden?',
				'Lijkt je kind "onhandig" of struikelt het vaak?',
			],
			description: (
				<>
					<span className="font-bold text-gray-900">We bouwen zelfvertrouwen op</span> via
					speelse oefeningen die grote bewegingen, balans en lichaamscontrole stimuleren.
				</>
			),
		},
		{
			emoji: '🧭',
			title: 'Ruimtelijke oriëntatie',
			symptoms: [
				'Problemen met links/rechts, richtingen of plaatsbepaling?',
				'Moeite met puzzelen, overschrijven of plannen?',
			],
			description: (
				<>
					<span className="font-bold text-gray-900">We oefenen oriëntatie</span> in de
					ruimte en op papier, zodat je kind zich beter kan organiseren en positioneren.
				</>
			),
		},
		{
			emoji: '🧠',
			title: 'Executieve functies: aandacht & concentratie',
			symptoms: [
				'Snel afgeleid, moeite met starten of opdrachten afwerken?',
				'Problemen met werkhouding of het opvolgen van stappen?',
			],
			description: (
				<>
					<span className="font-bold text-gray-900">Via beweging, spel en structuur</span>{' '}
					versterken we het werkgeheugen, de aandacht en het doorzettingsvermogen.
				</>
			),
		},
		{
			emoji: '🔁',
			title: 'Lateralisatie & lichaamsbesef',
			symptoms: [
				'Verwarring tussen links en rechts?',
				'Moeite met het kennen en gebruiken van het eigen lichaam?',
			],
			description: (
				<>
					<span className="font-bold text-gray-900">We ondersteunen</span> een goede
					lichaamsoriëntatie en linker-rechterontwikkeling, wat essentieel is voor
					motorische én cognitieve groei.
				</>
			),
		},
	]

	return (
		<div className="flex flex-col items-center">
			{/* Hero */}
			<div className="relative w-full page-hero">
				<div className="pt-16">
					<img
						src={psyTopBg}
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
							Psychomotoriek bij{' '}
							<span className="gradient-text">KineKriebels</span>
						</h1>
						<p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
							Bewegen, ontdekken en groeien – stap voor stap, in het ritme van elk
							kind.
						</p>
					</div>

					<div
						className="animate-fadeInUp space-y-5 mt-10"
						style={{ animationDelay: '0.1s' }}
					>
						<p className="text-lg md:text-xl leading-relaxed text-gray-600">
							Psychomotoriek is de verbinding tussen denken, voelen en bewegen. Sommige
							kinderen hebben wat extra ondersteuning nodig in hun ontwikkeling. Bij
							KineKriebels bied ik psychomotorische therapie aan die vertrekt vanuit
							spel, beweging en plezier – op maat van jouw kind.
						</p>
						<p className="text-lg md:text-xl leading-relaxed font-semibold text-gray-900">
							In mijn therapie werk ik aan verschillende domeinen die belangrijk zijn
							voor het dagelijks functioneren op school én thuis:
						</p>
					</div>
				</div>
			</div>

			{/* Therapy Domains Grid */}
			<div className="w-full bg-white">
				<div className="max-w-4xl mx-auto page-section">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{domains.map((domain, i) => (
							<TherapyDomain
								key={i}
								{...domain}
								delay={`${0.1 + i * 0.08}s`}
							/>
						))}
					</div>
				</div>
			</div>

			{/* CTA */}
			<div className="w-full section-warm">
				<div className="max-w-4xl mx-auto page-section">
					<div
						className="cta-section animate-fadeInUp"
						style={{ animationDelay: '0.2s' }}
					>
						<p className="font-display text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
							Elk kind is anders – dus werk ik steeds individueel en op maat
						</p>
						<p className="text-lg text-gray-600">
							met ruimte voor plezier, succeservaringen en kleine overwinningen.
							Therapie voelt hier nooit als "moeten", maar als ontdekken wat je wél
							kan!
						</p>
					</div>
				</div>
			</div>

			{/* Bottom illustration */}
			<div className="py-8 section-warm w-full flex justify-center">
				<img
					src={psyBottom}
					className="h-[25vh] mx-auto"
					alt="Decoratie"
					loading="lazy"
				/>
			</div>
		</div>
	)
}
