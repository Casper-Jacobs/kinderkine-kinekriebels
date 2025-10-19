export const Psychomotoriek = () => {
	return (
		<div className="flex flex-col bg-gradient-to-b! from-blue-50 to-white items-center justify-center">
			<div className="bg-[url(/src/assets/psy-top-bg.png)] bg-no-repeat bg-top bg-fixed h-[25vh] w-screen" />
			<div className="flex flex-col gap-6 w-full md:w-2/3 p-4 md:p-8">
				<div className="card card-accent animate-fadeInUp">
					<div className="flex items-start gap-4">
						<span className="icon-badge">🧠</span>
						<div>
							<h1 className="font-bold text-3xl gradient-text">Psychomotoriek bij KineKriebels</h1>
							<p className="italic text-lg text-gray-700 mt-2">
								Bewegen, ontdekken en groeien – stap voor stap, in het ritme van elk kind.
							</p>
						</div>
					</div>
				</div>

				<div className="card animate-fadeInUp" style={{animationDelay: '0.1s'}}>
					<p className="text-lg leading-relaxed">
						Psychomotoriek is de verbinding tussen denken, voelen en bewegen. Sommige
						kinderen hebben wat extra ondersteuning nodig in hun ontwikkeling. Bij
						KineKriebels bied ik psychomotorische therapie aan die vertrekt vanuit spel,
						beweging en plezier – op maat van jouw kind.
					</p>
					<p className="text-lg leading-relaxed mt-4 font-semibold text-pink-600">
						In mijn therapie werk ik aan verschillende domeinen die belangrijk zijn voor het
						dagelijks functioneren op school én thuis:
					</p>
				</div>

				<div className="card bg-gradient-to-br! from-purple-50 to-pink-50 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
					<div className="flex items-start gap-4 mb-4">
						<span className="icon-badge" style={{width: '56px', height: '56px', fontSize: '28px'}}>✍️</span>
						<h2 className="font-bold text-2xl text-purple-700">Fijne motoriek & schrijven</h2>
					</div>
					<div className="bg-white rounded-lg p-4 mb-3">
						<p className="font-semibold mb-2 text-gray-700">Herken je dit?</p>
						<ul className="space-y-2">
							<li className="flex items-start gap-2">
								<span className="text-purple-500 mt-1">•</span>
								<span>Moeite met knippen, tekenen, kleuren of schrijven?</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-purple-500 mt-1">•</span>
								<span>Onrijpe pengreep, te veel spanning of traag tempo?</span>
							</li>
						</ul>
					</div>
					<p className="leading-relaxed">
						<span className="font-bold text-purple-600">Samen oefenen we</span> schrijfmotoriek, pengreep en fijne handvaardigheden via leuke,
						kindvriendelijke spelletjes en technieken.
					</p>
				</div>

				<div className="card bg-gradient-to-br! from-green-50 to-blue-50 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
					<div className="flex items-start gap-4 mb-4">
						<span className="icon-badge" style={{width: '56px', height: '56px', fontSize: '28px', background: 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)'}}>🦶</span>
						<h2 className="font-bold text-2xl text-green-700">Grove motoriek & coördinatie</h2>
					</div>
					<div className="bg-white rounded-lg p-4 mb-3">
						<p className="font-semibold mb-2 text-gray-700">Herken je dit?</p>
						<ul className="space-y-2">
							<li className="flex items-start gap-2">
								<span className="text-green-500 mt-1">•</span>
								<span>Moeite met springen, lopen, evenwicht of balvaardigheden?</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-green-500 mt-1">•</span>
								<span>Lijkt je kind "onhandig" of struikelt het vaak?</span>
							</li>
						</ul>
					</div>
					<p className="leading-relaxed">
						<span className="font-bold text-green-600">We bouwen zelfvertrouwen op</span> via speelse oefeningen die grote bewegingen, balans
						en lichaamscontrole stimuleren.
					</p>
				</div>

				<div className="card bg-gradient-to-br! from-orange-50 to-yellow-50 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
					<div className="flex items-start gap-4 mb-4">
						<span className="icon-badge" style={{width: '56px', height: '56px', fontSize: '28px', background: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)'}}>🧭</span>
						<h2 className="font-bold text-2xl text-orange-700">Ruimtelijke oriëntatie</h2>
					</div>
					<div className="bg-white rounded-lg p-4 mb-3">
						<p className="font-semibold mb-2 text-gray-700">Herken je dit?</p>
						<ul className="space-y-2">
							<li className="flex items-start gap-2">
								<span className="text-orange-500 mt-1">•</span>
								<span>Problemen met links/rechts, richtingen of plaatsbepaling?</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-orange-500 mt-1">•</span>
								<span>Moeite met puzzelen, overschrijven of plannen?</span>
							</li>
						</ul>
					</div>
					<p className="leading-relaxed">
						<span className="font-bold text-orange-600">We oefenen oriëntatie</span> in de ruimte en op papier, zodat je kind zich beter kan
						organiseren en positioneren.
					</p>
				</div>

				<div className="card bg-gradient-to-br! from-blue-50 to-indigo-50 animate-fadeInUp" style={{animationDelay: '0.5s'}}>
					<div className="flex items-start gap-4 mb-4">
						<span className="icon-badge" style={{width: '56px', height: '56px', fontSize: '28px', background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)'}}>🧠</span>
						<h2 className="font-bold text-2xl text-blue-700">Executieve functies: aandacht & concentratie</h2>
					</div>
					<div className="bg-white rounded-lg p-4 mb-3">
						<p className="font-semibold mb-2 text-gray-700">Herken je dit?</p>
						<ul className="space-y-2">
							<li className="flex items-start gap-2">
								<span className="text-blue-500 mt-1">•</span>
								<span>Snel afgeleid, moeite met starten of opdrachten afwerken?</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-blue-500 mt-1">•</span>
								<span>Problemen met werkhouding of het opvolgen van stappen?</span>
							</li>
						</ul>
					</div>
					<p className="leading-relaxed">
						<span className="font-bold text-blue-600">Via beweging, spel en structuur</span> versterken we het werkgeheugen, de aandacht en
						het doorzettingsvermogen.
					</p>
				</div>

				<div className="card bg-gradient-to-br! from-pink-50 to-red-50 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
					<div className="flex items-start gap-4 mb-4">
						<span className="icon-badge" style={{width: '56px', height: '56px', fontSize: '28px', background: 'linear-gradient(135deg, #EC4899 0%, #EF4444 100%)'}}>🔁</span>
						<h2 className="font-bold text-2xl text-pink-700">Lateralisatie & lichaamsbesef</h2>
					</div>
					<div className="bg-white rounded-lg p-4 mb-3">
						<p className="font-semibold mb-2 text-gray-700">Herken je dit?</p>
						<ul className="space-y-2">
							<li className="flex items-start gap-2">
								<span className="text-pink-500 mt-1">•</span>
								<span>Verwarring tussen links en rechts?</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-pink-500 mt-1">•</span>
								<span>Moeite met het kennen en gebruiken van het eigen lichaam?</span>
							</li>
						</ul>
					</div>
					<p className="leading-relaxed">
						<span className="font-bold text-pink-600">We ondersteunen</span> een goede lichaamsoriëntatie en linker-rechterontwikkeling, wat
						essentieel is voor motorische én cognitieve groei.
					</p>
				</div>

				<div className="card text-center bg-gradient-to-br! from-purple-500 to-pink-500 text-white animate-fadeInUp" style={{animationDelay: '0.7s'}}>
					<div className="text-6xl mb-4 animate-bounce-slow">💡</div>
					<p className="text-xl font-semibold mb-2">Elk kind is anders – dus werk ik steeds individueel en op maat</p>
					<p className="text-lg">
						met ruimte voor plezier, succeservaringen en kleine overwinningen. Therapie voelt hier
						nooit als "moeten", maar als ontdekken wat je wél kan!
					</p>
				</div>
			</div>
			<div className="h-[30vh] mt-8">
				<img src="/src/assets/psy-bottom.png" className="h-full mx-auto" alt="Logo" />
			</div>
		</div>
	)
}
