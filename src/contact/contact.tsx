import homeBottom from '../assets/home-bottom.png'
import topBackground from '../assets/top-background.png'

export const Contact = () => {
	return (
		<div className="flex flex-col bg-white items-center justify-center">
			<div className="w-full pt-20">
				<img src={topBackground} className="w-full h-auto object-cover" alt="Background" />
			</div>
			<div className="flex flex-col gap-6 w-full md:w-2/3 p-4 md:p-8">
				<div className="card-accent animate-fadeInUp">
					<div className="flex items-start gap-4">
						<span className="icon-badge">📞</span>
						<div>
							<h1 className="font-bold text-3xl text-gray-900">Contact</h1>
							<p className="italic text-lg text-gray-600 mt-2">
								Heb je een vraag of wil je een afspraak maken? Ik help je graag
								verder!
							</p>
						</div>
					</div>
				</div>
				<div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
					<p className="text-lg leading-relaxed text-gray-700 mb-3">
						Ben je op zoek naar ondersteuning voor je kind of heb je vragen over de
						therapie? Wil je graag kennismaken of een eerste afspraak inplannen?
					</p>
					<p className="text-lg leading-relaxed text-gray-700">
						Klik dan op de knop hieronder en vul het formulier in.
					</p>
					<p className="text-lg leading-relaxed text-gray-700">
						Ik neem zo snel mogelijk contact met je op om verder af te spreken.
					</p>
				</div>
				<div
					className="text-center py-12 px-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl animate-fadeInUp"
					style={{ animationDelay: '0.2s' }}
				>
					<button
						className="bg-pink-600 text-white font-bold text-lg py-4 px-8 rounded-full cursor-pointer hover:bg-pink-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
						onClick={() => {
							window.open(
								'https://docs.google.com/forms/d/e/1FAIpQLSdaM1rW6rMda9j4tG3F1rBoFtBJRcXRqHWUXiKotCKsNW0CNA/viewform',
								'_blank'
							)
						}}
					>
						Maak een afspraak
					</button>
				</div>{' '}
				<div
					className="border-l-4 border-pink-600 pl-6 space-y-4 animate-fadeInUp"
					style={{ animationDelay: '0.3s' }}
				>
					<h2 className="font-bold text-2xl mb-4 text-center text-gray-900">
						Of neem rechtstreeks contact op
					</h2>
					<div className="grid md:grid-cols-2 gap-4">
						<div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
							<span className="text-4xl">📧</span>
							<div>
								<p className="font-bold text-gray-900">E-mail</p>
								<p className="text-sm text-gray-700">info@kinekriebels.be</p>
							</div>
						</div>
						<div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
							<span className="text-4xl">📱</span>
							<div>
								<p className="font-bold text-gray-900">Telefoon</p>
								<p className="text-sm text-gray-700">0471/ 67 18 26</p>
							</div>
						</div>
					</div>
				</div>
				<div
					className="text-center bg-gray-50 animate-fadeInUp"
					style={{ animationDelay: '0.4s' }}
				>
					<p className="text-xl font-semibold text-gray-900">
						Ik kijk ernaar uit om jullie te ontmoeten bij{' '}
						<span className="font-bold text-pink-600">KineKriebels</span>!
					</p>
				</div>
			</div>
			<div className="h-[30vh] mt-8">
				<img src={homeBottom} className="h-full mx-auto" alt="Logo" />
			</div>
		</div>
	)
}
