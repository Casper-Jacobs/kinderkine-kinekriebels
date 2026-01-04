import prakBottom from '../assets/prak-bottom.png';
import prakTopBg from '../assets/prak-top-bg.png';

export const Praktisch = () => {
	return (
		<div className="flex flex-col bg-white items-center justify-center">
			<div className="w-full pt-20">
				<img 
					src={prakTopBg} 
					className="w-full h-auto object-cover"
					alt="Background"
				/>
			</div>
		<div className="flex flex-col gap-16 w-full md:w-2/3 p-4 md:p-8 py-12">
			<div className="animate-fadeInUp max-w-3xl">
				<div className="flex items-center gap-4 mb-6">
					<span className="icon-badge">📋</span>
					<h1 className="font-bold text-4xl md:text-5xl text-gray-900">Praktische info</h1>
				</div>
				<p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
					Alle belangrijke info op een rijtje.
				</p>
			</div>

			<div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
				<p className="text-lg md:text-xl leading-relaxed text-gray-700">
					Hieronder vind je alle praktische informatie over de werking van de
					praktijk. Heb je toch nog vragen? Aarzel niet om contact op te nemen – ik
					help je graag verder.
				</p>
			</div>				<div
					className="border-l-4 border-pink-600 pl-6 space-y-4 animate-fadeInUp"
					style={{ animationDelay: '0.2s' }}
				>
					<div className="flex items-start gap-4 mb-4">
						<span className="text-4xl">🗓️</span>
						<h2 className="font-bold text-2xl text-gray-900">Afspraken</h2>
					</div>
					<p className="text-lg leading-relaxed text-gray-700">
						Alle sessies gaan door{' '}
						<span className="font-bold text-gray-900">op afspraak</span>.
					</p>
					<p className="text-lg leading-relaxed text-gray-700">
						Zo kan ik voldoende tijd en aandacht voorzien voor elk kind.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					<div
						className="bg-gray-50 animate-fadeInUp"
						style={{ animationDelay: '0.3s' }}
					>
						<div className="flex items-start gap-3 mb-4">
							<span className="text-4xl">📍</span>
							<h3 className="font-bold text-xl text-gray-900">Locatie</h3>
						</div>
						<div className="space-y-2 text-lg text-gray-700">
							<p className="font-semibold text-gray-900">KineKriebels</p>
							<p>Katteweidelaan 84</p>
							<p>3590 Diepenbeek</p>
						</div>
					</div>

					<div
						className="bg-gray-50 animate-fadeInUp"
						style={{ animationDelay: '0.4s' }}
					>
						<div className="flex items-start gap-3 mb-4">
							<span className="text-4xl">⏰</span>
							<h3 className="font-bold text-xl text-gray-900">Openingsuren</h3>
						</div>
						<div className="space-y-2 text-lg text-gray-700">
							<p>
								Enkel op afspraak
							</p>
						</div>
					</div>
				</div>

				<div
					className="border-l-4 border-pink-600 pl-6 space-y-4 animate-fadeInUp"
					style={{ animationDelay: '0.5s' }}
				>
					<div className="flex items-start gap-4 mb-4">
						<span className="text-4xl">⏱️</span>
						<h2 className="font-bold text-2xl text-gray-900">Duur van de sessie</h2>
					</div>
					<ul className="space-y-3 text-lg text-gray-700">
						<li className="flex items-start gap-3">
							<span className="text-pink-600 mt-1">•</span>
							<span>
								Een sessie duurt{' '}
								<span className="font-bold text-gray-900">30 minuten</span>
							</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-pink-600 mt-1">•</span>
							<span>Intakegesprek of eerste kennismaking kan meer tijd in beslag nemen</span>
						</li>
					</ul>
				</div>

				<div
					className="bg-gray-50 animate-fadeInUp"
					style={{ animationDelay: '0.6s' }}
				>
					<div className="flex items-start gap-4 mb-4">
						<span className="text-4xl">💶</span>
						<h2 className="font-bold text-2xl text-gray-900">Tarieven</h2>
					</div>
					<p className="text-lg leading-relaxed text-gray-700">
						Als kinesitherapeut ben ik gedeconventioneerd. Terugbetaling gebeurt volgens
						de tarieven van de mutualiteit.
					</p>
				</div>
			</div>
			<div className="h-[30vh] mt-8">
				<img src={prakBottom} className="h-full mx-auto" alt="Logo" />
			</div>
		</div>
	)
}
