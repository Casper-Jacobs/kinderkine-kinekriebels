export const Contact = () => {
	return (
		<div className="flex flex-col bg-gradient-to-b! from-purple-50 to-white items-center justify-center">
			<div className="bg-[url(/src/assets/top-background.png)] bg-no-repeat bg-top bg-fixed h-[25vh] w-screen" />
			<div className="flex flex-col gap-6 w-full md:w-2/3 p-4 md:p-8">
				<div className="card card-accent animate-fadeInUp">
					<div className="flex items-start gap-4">
						<span className="icon-badge">📞</span>
						<div>
							<h1 className="font-bold text-3xl gradient-text">Contact</h1>
							<p className="italic text-lg text-gray-700 mt-2">
								Heb je een vraag of wil je een afspraak maken? Ik help je graag
								verder!
							</p>
						</div>
					</div>
				</div>

				<div className="card animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
					<p className="text-lg leading-relaxed mb-3">
						Ben je op zoek naar ondersteuning voor je kind of heb je vragen over de
						therapie? Wil je graag kennismaken of een eerste afspraak inplannen?
					</p>
					<p className="text-lg leading-relaxed">
						Klik dan op de knop hieronder en vul het formulier in.
					</p>
					<p className="text-lg leading-relaxed">
						Ik neem zo snel mogelijk contact met je op om verder af te spreken.
					</p>
				</div>

				<div
					className="card text-center bg-gradient-to-br! from-pink-500 to-purple-500 p-8 animate-fadeInUp"
					style={{ animationDelay: '0.2s' }}
				>
					<div className="text-6xl mb-4 animate-bounce-slow">👇</div>
					<button
						className="bg-white text-pink-600 font-bold text-lg py-4 px-8 rounded-full cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300"
						onClick={() => {
							window.open(
								'https://docs.google.com/forms/d/e/1FAIpQLSdaM1rW6rMda9j4tG3F1rBoFtBJRcXRqHWUXiKotCKsNW0CNA/viewform',
								'_blank'
							)
						}}
					>
						Maak een afspraak
					</button>
				</div>

				<div
					className="card bg-gradient-to-br! from-blue-50 to-purple-50 animate-fadeInUp"
					style={{ animationDelay: '0.3s' }}
				>
					<h2 className="font-bold text-2xl mb-4 text-center text-purple-700">
						Of neem rechtstreeks contact op
					</h2>
					<div className="grid md:grid-cols-2 gap-4">
						<div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
							<span className="text-4xl">📧</span>
							<div>
								<p className="font-bold text-purple-600">E-mail</p>
								<p className="text-sm">myrthe.kinekriebels@gmail.com</p>
							</div>
						</div>
						<div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
							<span className="text-4xl">📱</span>
							<div>
								<p className="font-bold text-purple-600">Telefoon</p>
								<p className="text-sm">0471/ 67 18 26</p>
							</div>
						</div>
					</div>
				</div>

				<div
					className="card text-center bg-gradient-to-r! from-pink-100 to-purple-100 animate-fadeInUp"
					style={{ animationDelay: '0.4s' }}
				>
					<p className="text-xl font-semibold">
						Ik kijk ernaar uit om jullie te ontmoeten bij{' '}
						<span className="font-bold text-pink-600">KineKriebels</span>! 💕
					</p>
				</div>
			</div>
			<div className="h-[30vh] mt-8">
				<img src="/src/assets/home-bottom.png" className="h-full mx-auto" alt="Logo" />
			</div>
		</div>
	)
}
