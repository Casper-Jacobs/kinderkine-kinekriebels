export const Praktisch = () => {
	return (
		<div className="flex flex-col bg-gradient-to-b! from-green-50 to-white items-center justify-center">
			<div className="bg-[url(/src/assets/prak-top-bg.png)] bg-no-repeat bg-top bg-fixed h-[25vh] w-screen" />
			<div className="flex flex-col gap-6 w-full md:w-2/3 p-4 md:p-8">
				<div className="card card-accent animate-fadeInUp">
					<div className="flex items-start gap-4">
						<span className="icon-badge">📋</span>
						<div>
							<h1 className="font-bold text-3xl gradient-text">Praktische info</h1>
							<p className="italic text-lg text-gray-700 mt-2">
								Alle belangrijke info op een rijtje.
							</p>
						</div>
					</div>
				</div>

				<div className="card animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
					<p className="text-lg leading-relaxed">
						Hieronder vind je alle praktische informatie over de werking van de
						praktijk. Heb je toch nog vragen? Aarzel niet om contact op te nemen – ik
						help je graag verder.
					</p>
				</div>

				<div
					className="card bg-gradient-to-br! from-blue-50 to-purple-50 animate-fadeInUp"
					style={{ animationDelay: '0.2s' }}
				>
					<div className="flex items-start gap-4 mb-4">
						<span
							className="icon-badge"
							style={{
								width: '56px',
								height: '56px',
								fontSize: '28px',
								background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
							}}
						>
							🗓️
						</span>
						<h2 className="font-bold text-2xl text-blue-700">Afspraken</h2>
					</div>
					<p className="text-lg leading-relaxed">
						Alle sessies gaan door{' '}
						<span className="font-bold text-blue-600">op afspraak</span>.
					</p>
					<p className="text-lg leading-relaxed">
						Zo kan ik voldoende tijd en aandacht voorzien voor elk kind.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					<div
						className="card bg-gradient-to-br! from-pink-50 to-red-50 animate-fadeInUp"
						style={{ animationDelay: '0.3s' }}
					>
						<div className="flex items-start gap-3 mb-4">
							<span className="text-4xl">📍</span>
							<h3 className="font-bold text-xl text-pink-700">Locatie</h3>
						</div>
						<div className="space-y-2 text-lg">
							<p className="font-semibold">Kinderkine KineKriebels</p>
							<p>Katteweidelaan 84</p>
							<p>3590 Diepenbeek</p>
						</div>
					</div>

					<div
						className="card bg-gradient-to-br! from-green-50 to-teal-50 animate-fadeInUp"
						style={{ animationDelay: '0.4s' }}
					>
						<div className="flex items-start gap-3 mb-4">
							<span className="text-4xl">⏰</span>
							<h3 className="font-bold text-xl text-green-700">Openingsuren</h3>
						</div>
						<div className="space-y-2 text-lg">
							<p>
								<span className="font-semibold">Dinsdag & donderdag:</span>{' '}
								16u30-19u
							</p>
							<p>
								<span className="font-semibold">Zaterdag:</span> 9u-12u
							</p>
						</div>
					</div>
				</div>

				<div
					className="card bg-gradient-to-br! from-orange-50 to-yellow-50 animate-fadeInUp"
					style={{ animationDelay: '0.5s' }}
				>
					<div className="flex items-start gap-4 mb-4">
						<span
							className="icon-badge"
							style={{
								width: '56px',
								height: '56px',
								fontSize: '28px',
								background: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
							}}
						>
							⏱️
						</span>
						<h2 className="font-bold text-2xl text-orange-700">Duur van de sessie</h2>
					</div>
					<ul className="space-y-3 text-lg">
						<li className="flex items-start gap-3">
							<span className="text-orange-500 mt-1">•</span>
							<span>
								Een sessie duurt{' '}
								<span className="font-bold text-orange-600">30 minuten</span>
							</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-orange-500 mt-1">•</span>
							<span>Intakegesprek of eerste kennismaking kan iets langer duren</span>
						</li>
					</ul>
				</div>

				<div
					className="card bg-gradient-to-r! from-purple-100 to-pink-100 animate-fadeInUp"
					style={{ animationDelay: '0.6s' }}
				>
					<div className="flex items-start gap-4 mb-4">
						<span
							className="icon-badge"
							style={{
								width: '56px',
								height: '56px',
								fontSize: '28px',
								background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
							}}
						>
							💶
						</span>
						<h2 className="font-bold text-2xl text-purple-700">Tarieven</h2>
					</div>
					<p className="text-lg leading-relaxed">
						Als kinesitherapeut ben ik gedeconventioneerd. Terugbetaling gebeurt volgens
						de tarieven van de mutualiteit.
					</p>
				</div>
			</div>
			<div className="h-[30vh] mt-8">
				<img src="/src/assets/prak-bottom.png" className="h-full mx-auto" alt="Logo" />
			</div>
		</div>
	)
}
