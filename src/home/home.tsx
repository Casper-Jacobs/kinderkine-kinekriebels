export const Home = () => {
	return (
		<div className="flex flex-col bg-white items-center justify-center">
			<div className="bg-[url(/src/assets/top-background.png)] bg-no-repeat bg-top bg-fixed h-[25vh] w-screen" />
			<div className="h-[50vh]">
				<img
					src="/src/assets/kine-kriebels.png"
					className="h-full mx-auto drop-shadow-2xl"
					alt="Logo"
				/>
			</div>
			<div className="flex flex-col gap-6 w-full md:w-2/3 p-4 md:p-8">
				<div className="card card-accent animate-fadeInUp">
					<div className="flex items-start gap-4">
						<span className="icon-badge">🏠</span>
						<div>
							<h1 className="font-bold text-3xl mb-3 text-gray-900">
								Welkom bij KineKriebels!
							</h1>
							<p className="italic text-lg text-gray-600">
								Waar bewegen plezier wordt en elk kind mag groeien op zijn eigen
								tempo.
							</p>
						</div>
					</div>
				</div>

				<div className="card animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
					<p className="text-lg leading-relaxed text-gray-700">
						Bij <span className="font-semibold text-gray-900">KineKriebels</span> draait
						alles rond kinderen en hun unieke ontwikkeling. Sommige kinderen hebben wat
						extra ondersteuning nodig in hun motoriek, evenwicht, concentratie of
						zelfvertrouwen – en daar help ik graag bij.
					</p>
				</div>

				<div className="card animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
					<p className="text-lg leading-relaxed text-gray-700">
						Als gespecialiseerde kinesitherapeut in{' '}
						<span className="font-semibold text-gray-900">psychomotoriek bij kinderen</span>
						, bied ik begeleiding op maat, afgestemd op de noden van jouw kind. Dat doen
						we op een speelse, positieve en veilige manier – met kriebels voor beweging,
						spel en groei!
					</p>
				</div>

				<div className="card animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
					<h2 className="font-bold text-2xl mb-4 text-gray-900">
						Wat mag je verwachten?
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
							<span className="text-2xl">🏡</span>
							<p className="text-gray-700">Een warme, kindvriendelijke omgeving</p>
						</div>
						<div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
							<span className="text-2xl">🎮</span>
							<p className="text-gray-700">
								Therapie in spelvorm, aangepast aan de leeftijd en interesses van je
								kind
							</p>
						</div>
						<div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
							<span className="text-2xl">🌟</span>
							<p className="text-gray-700">Ruimte voor plezier, succeservaringen en zelfvertrouwen</p>
						</div>
						<div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
							<span className="text-2xl">💬</span>
							<p className="text-gray-700">Open communicatie met ouders</p>
						</div>
					</div>
				</div>

				<div
					className="card bg-gray-50 border-l-4 border-pink-600 animate-fadeInUp"
					style={{ animationDelay: '0.4s' }}
				>
					<p className="text-lg leading-relaxed text-gray-700">
						Of het nu gaat om moeilijkheden met fijne motoriek, evenwicht, aandacht of
						zelfbeeld – bij KineKriebels werken we samen aan{' '}
						<span className="font-semibold text-gray-900">
							kleine stapjes die grote sprongen mogelijk maken
						</span>
						.
					</p>
				</div>

				<div
					className="card text-center bg-pink-600! text-white animate-fadeInUp"
					style={{ animationDelay: '0.5s' }}
				>
					<p className="text-xl font-semibold">
						Benieuwd of ik iets voor jouw kind kan betekenen?
					</p>
					<p className="text-lg mt-2">
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
