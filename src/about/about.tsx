export const About = () => {
	return (
		<div className="flex flex-col bg-white items-center justify-center">
			<div className="bg-[url(/src/assets/main-bg-about.png)] bg-no-repeat bg-top bg-fixed h-[25vh] w-screen" />
			<div className="flex flex-col md:flex-row gap-8 justify-between items-center w-full md:w-2/3 p-4 md:p-8">
				<div className="flex flex-col gap-6 w-full md:w-2/3 animate-slideInLeft">
					<div className="card card-accent">
						<div className="flex items-start gap-4">
							<span className="icon-badge">👩‍⚕️</span>
							<div>
								<h1 className="font-bold text-3xl text-gray-900">Over mij</h1>
							</div>
						</div>
					</div>

					<div className="card">
						<p className="text-lg font-semibold text-gray-900 mb-2">
							Hallo! Ik ben Myrthe, kinesitherapeut met een hart voor kinderen.
						</p>
						<p className="text-lg leading-relaxed text-gray-700">
							Elke dag mag ik kinderen ondersteunen in hun groei – fysiek, emotioneel
							en motorisch. Ik werk als kinesitherapeut in het{' '}
							<span className="font-bold text-gray-900">buitengewoon onderwijs</span>,
							waar ik kinderen begeleid met verschillende ontwikkelingsnoden. Daar heb
							ik geleerd dat elk kind uniek is, en dat kleine stapjes vaak de grootste
							vooruitgang betekenen.
						</p>
					</div>

					<div className="card border-l-4 border-pink-600">
						<div className="flex items-start gap-3 mb-3">
							<span className="text-3xl">🎪</span>
							<h3 className="font-bold text-xl text-gray-900">Mijn passie</h3>
						</div>
						<p className="leading-relaxed text-gray-700">
							Mijn passie voor het werken met kinderen begon al veel vroeger. Als kind
							zat ik jarenlang bij de{' '}
							<span className="font-bold text-gray-900">Chiro</span> – eerst als lid,
							later als leiding. Nadien gaf ik ook{' '}
							<span className="font-bold text-gray-900">Kazou-kampen</span>, waar
							spel, verbondenheid en plezier centraal stonden. Die ervaringen neem ik
							vandaag nog elke dag mee in mijn werk: een veilige omgeving creëren waar
							kinderen zichzelf mogen zijn, durven bewegen en vol vertrouwen kunnen
							groeien.
						</p>
					</div>

					<div className="card bg-gray-50">
						<div className="flex items-start gap-3 mb-3">
							<span className="text-3xl">💝</span>
							<h3 className="font-bold text-xl text-gray-900">KineKriebels</h3>
						</div>
						<p className="leading-relaxed text-gray-700">
							Met <span className="font-bold text-gray-900">KineKriebels</span> wil ik
							een warme plek aanbieden waar therapie speels, persoonlijk en op maat
							gebeurt. Waar kinderen kunnen ontdekken wat ze wél kunnen en waar ze met
							kleine succesjes grote sprongen maken.
						</p>
					</div>
				</div>
				<div className="w-full md:w-1/3 animate-slideInRight">
					<div className="card p-4">
						<img
							src="/src/assets/myrthe.png"
							className="w-full rounded-2xl shadow-lg"
							alt="Myrthe"
						/>
					</div>
				</div>
			</div>

			<div className="h-[30vh] mt-8">
				<img src="/src/assets/about-bottom.png" className="h-full mx-auto" alt="Logo" />
			</div>
		</div>
	)
}
