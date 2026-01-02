import psyBottom from '../assets/psy-bottom.png';
import psyTopBg from '../assets/psy-top-bg.png';

export const Psychomotoriek = () => {
	return (
		<div className="flex flex-col bg-white items-center justify-center">
			<div className="w-full pt-20">
				<img 
					src={psyTopBg} 
					className="w-full h-auto object-cover"
					alt="Background"
				/>
			</div>
		<div className="flex flex-col gap-16 w-full md:w-2/3 p-4 md:p-8 py-12">
			<div className="animate-fadeInUp max-w-3xl">
				<div className="flex items-center gap-4 mb-6">
					<span className="icon-badge">🧠</span>
					<h1 className="font-bold text-4xl md:text-5xl text-gray-900">
						Psychomotoriek bij KineKriebels
					</h1>
				</div>
				<p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
					Bewegen, ontdekken en groeien – stap voor stap, in het ritme van elk
					kind.
				</p>
			</div>

			<div className="animate-fadeInUp space-y-6" style={{ animationDelay: '0.1s' }}>
				<p className="text-lg md:text-xl leading-relaxed text-gray-700">
					Psychomotoriek is de verbinding tussen denken, voelen en bewegen. Sommige
					kinderen hebben wat extra ondersteuning nodig in hun ontwikkeling. Bij
					KineKriebels bied ik psychomotorische therapie aan die vertrekt vanuit spel,
					beweging en plezier – op maat van jouw kind.
				</p>
				<p className="text-lg md:text-xl leading-relaxed font-semibold text-gray-900">
					In mijn therapie werk ik aan verschillende domeinen die belangrijk zijn voor
					het dagelijks functioneren op school én thuis:
				</p>
			</div>				<div
					className="animate-fadeInUp"
					style={{ animationDelay: '0.2s' }}
				>
					<div className="flex items-center gap-4 mb-6">
						<span className="text-4xl">✍️</span>
						<h2 className="font-bold text-2xl text-gray-900">
							Fijne motoriek & schrijven
						</h2>
					</div>
					<div className="bg-gray-50 rounded-lg p-4 mb-3">
						<p className="font-semibold mb-2 text-gray-700">Herken je dit?</p>
						<ul className="space-y-2">
							<li className="flex items-start gap-2">
								<span className="text-pink-600 mt-1">•</span>
								<span className="text-gray-700">
									Moeite met knippen, tekenen, kleuren of schrijven?
								</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-pink-600 mt-1">•</span>
								<span className="text-gray-700">
									Onrijpe pengreep, te veel spanning of traag tempo?
								</span>
							</li>
						</ul>
					</div>
					<p className="leading-relaxed text-gray-700">
						<span className="font-bold text-gray-900">Samen oefenen we</span>{' '}
						schrijfmotoriek, pengreep en fijne handvaardigheden via leuke,
						kindvriendelijke spelletjes en technieken.
					</p>
				</div>

				<div
					className="animate-fadeInUp"
					style={{ animationDelay: '0.3s' }}
				>
					<div className="flex items-center gap-4 mb-6">
						<span className="text-4xl">🦶</span>
						<h2 className="font-bold text-2xl text-gray-900">
							Grove motoriek & coördinatie
						</h2>
					</div>
					<div className="bg-gray-50 rounded-lg p-4 mb-3">
						<p className="font-semibold mb-2 text-gray-700">Herken je dit?</p>
						<ul className="space-y-2">
							<li className="flex items-start gap-2">
								<span className="text-pink-600 mt-1">•</span>
								<span className="text-gray-700">
									Moeite met springen, lopen, evenwicht of balvaardigheden?
								</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-pink-600 mt-1">•</span>
								<span className="text-gray-700">
									Lijkt je kind "onhandig" of struikelt het vaak?
								</span>
							</li>
						</ul>
					</div>
					<p className="leading-relaxed text-gray-700">
						<span className="font-bold text-gray-900">We bouwen zelfvertrouwen op</span>{' '}
						via speelse oefeningen die grote bewegingen, balans en lichaamscontrole
						stimuleren.
					</p>
				</div>

				<div
					className="animate-fadeInUp"
					style={{ animationDelay: '0.4s' }}
				>
					<div className="flex items-center gap-4 mb-6">
						<span className="text-4xl">🧭</span>
						<h2 className="font-bold text-2xl text-gray-900">Ruimtelijke oriëntatie</h2>
					</div>
					<div className="bg-gray-50 rounded-lg p-4 mb-3">
						<p className="font-semibold mb-2 text-gray-700">Herken je dit?</p>
						<ul className="space-y-2">
							<li className="flex items-start gap-2">
								<span className="text-pink-600 mt-1">•</span>
								<span className="text-gray-700">
									Problemen met links/rechts, richtingen of plaatsbepaling?
								</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-pink-600 mt-1">•</span>
								<span className="text-gray-700">
									Moeite met puzzelen, overschrijven of plannen?
								</span>
							</li>
						</ul>
					</div>
					<p className="leading-relaxed text-gray-700">
						<span className="font-bold text-gray-900">We oefenen oriëntatie</span> in de
						ruimte en op papier, zodat je kind zich beter kan organiseren en
						positioneren.
					</p>
				</div>

				<div
					className="animate-fadeInUp"
					style={{ animationDelay: '0.5s' }}
				>
					<div className="flex items-center gap-4 mb-6">
						<span className="text-4xl">🧠</span>
						<h2 className="font-bold text-2xl text-gray-900">
							Executieve functies: aandacht & concentratie
						</h2>
					</div>
					<div className="bg-gray-50 rounded-lg p-4 mb-3">
						<p className="font-semibold mb-2 text-gray-700">Herken je dit?</p>
						<ul className="space-y-2">
							<li className="flex items-start gap-2">
								<span className="text-pink-600 mt-1">•</span>
								<span className="text-gray-700">
									Snel afgeleid, moeite met starten of opdrachten afwerken?
								</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-pink-600 mt-1">•</span>
								<span className="text-gray-700">
									Problemen met werkhouding of het opvolgen van stappen?
								</span>
							</li>
						</ul>
					</div>
					<p className="leading-relaxed text-gray-700">
						<span className="font-bold text-gray-900">
							Via beweging, spel en structuur
						</span>{' '}
						versterken we het werkgeheugen, de aandacht en het doorzettingsvermogen.
					</p>
				</div>

				<div
					className="animate-fadeInUp"
					style={{ animationDelay: '0.6s' }}
				>
					<div className="flex items-center gap-4 mb-6">
						<span className="text-4xl">🔁</span>
						<h2 className="font-bold text-2xl text-gray-900">
							Lateralisatie & lichaamsbesef
						</h2>
					</div>
					<div className="bg-gray-50 rounded-lg p-4 mb-3">
						<p className="font-semibold mb-2 text-gray-700">Herken je dit?</p>
						<ul className="space-y-2">
							<li className="flex items-start gap-2">
								<span className="text-pink-600 mt-1">•</span>
								<span className="text-gray-700">
									Verwarring tussen links en rechts?
								</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-pink-600 mt-1">•</span>
								<span className="text-gray-700">
									Moeite met het kennen en gebruiken van het eigen lichaam?
								</span>
							</li>
						</ul>
					</div>
					<p className="leading-relaxed text-gray-700">
						<span className="font-bold text-gray-900">We ondersteunen</span> een goede
						lichaamsoriëntatie en linker-rechterontwikkeling, wat essentieel is voor
						motorische én cognitieve groei.
					</p>
				</div>

				<div
					className="text-center py-12 px-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl border-l-4 border-pink-600 animate-fadeInUp"
					style={{ animationDelay: '0.7s' }}
				>
					<p className="text-2xl font-semibold text-gray-900 mb-3">
						Elk kind is anders – dus werk ik steeds individueel en op maat
					</p>
					<p className="text-lg text-gray-700">
						met ruimte voor plezier, succeservaringen en kleine overwinningen. Therapie
						voelt hier nooit als "moeten", maar als ontdekken wat je wél kan!
					</p>
				</div>
			</div>
			<div className="h-[30vh] mt-8">
				<img src={psyBottom} className="h-full mx-auto" alt="Logo" />
			</div>
		</div>
	)
}
