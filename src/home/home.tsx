export const Home = () => {
	return (
		<div className="flex flex-col bg-white items-center justify-center">
			<div className="w-full pt-20">
				<img 
					src="/src/assets/top-background.png" 
					className="w-full h-auto object-cover"
					alt="Background"
				/>
			</div>
			<div className="h-[50vh]">
				<img
					src="/src/assets/kine-kriebels.png"
					className="h-full mx-auto drop-shadow-2xl"
					alt="Logo"
				/>
			</div>
			<div className="flex flex-col gap-16 w-full md:w-2/3 p-4 md:p-8 py-12">
				<div className="animate-fadeInUp max-w-3xl">
					<div className="flex items-center gap-4 mb-6">
						<span className="icon-badge">🏠</span>
						<h1 className="font-bold text-4xl md:text-5xl text-gray-900">
							Welkom bij KineKriebels!
						</h1>
					</div>
					<p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
						Waar bewegen plezier wordt en elk kind mag groeien op zijn eigen tempo.
					</p>
				</div>

				<div className="animate-fadeInUp space-y-6" style={{ animationDelay: '0.1s' }}>
					<p className="text-lg md:text-xl leading-relaxed text-gray-700">
						Bij <span className="font-semibold text-gray-900">KineKriebels</span> draait
						alles rond kinderen en hun unieke ontwikkeling. Sommige kinderen hebben wat
						extra ondersteuning nodig in hun motoriek, evenwicht, concentratie of
						zelfvertrouwen – en daar help ik graag bij.
					</p>
					<p className="text-lg md:text-xl leading-relaxed text-gray-700">
						Als gespecialiseerde kinesitherapeut in{' '}
						<span className="font-semibold text-gray-900">
							psychomotoriek bij kinderen
						</span>
						, bied ik begeleiding op maat, afgestemd op de noden van jouw kind. Dat doen
						we op een speelse, positieve en veilige manier – met kriebels voor beweging,
						spel en groei!
					</p>
				</div>

				<div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
					<h2 className="font-bold text-3xl mb-8 text-gray-900">
						Wat mag je verwachten?
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="flex items-start gap-4">
							<span className="text-4xl flex-shrink-0">🏡</span>
							<div>
								<h3 className="font-semibold text-lg text-gray-900 mb-1">Warme omgeving</h3>
								<p className="text-gray-600">Een kindvriendelijke ruimte waar iedereen zich welkom voelt</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<span className="text-4xl flex-shrink-0">🎮</span>
							<div>
								<h3 className="font-semibold text-lg text-gray-900 mb-1">Therapie in spelvorm</h3>
								<p className="text-gray-600">Aangepast aan de leeftijd en interesses van je kind</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<span className="text-4xl flex-shrink-0">🌟</span>
							<div>
								<h3 className="font-semibold text-lg text-gray-900 mb-1">Succesgerichte aanpak</h3>
								<p className="text-gray-600">Ruimte voor plezier, succeservaringen en zelfvertrouwen</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<span className="text-4xl flex-shrink-0">💬</span>
							<div>
								<h3 className="font-semibold text-lg text-gray-900 mb-1">Open communicatie</h3>
								<p className="text-gray-600">Transparante samenwerking met ouders</p>
							</div>
						</div>
					</div>
				</div>

				<div
					className="animate-fadeInUp border-l-4 border-pink-600 pl-6 py-2"
					style={{ animationDelay: '0.3s' }}
				>
					<p className="text-lg md:text-xl leading-relaxed text-gray-700">
						Of het nu gaat om moeilijkheden met fijne motoriek, evenwicht, aandacht of
						zelfbeeld – bij KineKriebels werken we samen aan{' '}
						<span className="font-semibold text-gray-900">
							kleine stapjes die grote sprongen mogelijk maken
						</span>
						.
					</p>
				</div>

				<div
					className="animate-fadeInUp text-center py-12 px-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl"
					style={{ animationDelay: '0.4s' }}
				>
					<p className="text-2xl font-semibold text-gray-900 mb-3">
						Benieuwd of ik iets voor jouw kind kan betekenen?
					</p>
					<p className="text-lg text-gray-700">
						Neem gerust contact op – ik help jullie graag verder!
					</p>
				</div>
			</div>
			<div className="h-[30vh] mt-8">
				<img src="/src/assets/home-bottom.png" className="h-full mx-auto" alt="Logo" />
			</div>
		</div>
	)
}
