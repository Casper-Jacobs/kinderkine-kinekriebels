
export const About = () => {
	return (
		<div className="flex flex-col bg-primary items-center justify-center">
			<div className="bg-[url(/src/assets/main-bg-about.png)] bg-no-repeat bg-top bg-fixed h-[25vh] w-screen"/>
			<div className="flex flex-row justify-between items-center w-full md:w-2/3 p-2">
				<div className="flex flex-col gap-3 w-2/3 p-2">
					<h1 className="font-bold">👩‍⚕️ Over mij</h1>
					<p>Hallo! Ik ben Myrthe, kinesitherapeut met een hart voor kinderen.</p>
					<p>Elke dag mag ik kinderen ondersteunen in hun groei – fysiek, emotioneel en motorisch.
						Ik werk als kinesitherapeut in het <span className="font-bold">buitengewoon onderwijs</span>,
						waar ik kinderen begeleid met verschillende ontwikkelingsnoden.
						Daar heb ik geleerd dat elk kind uniek is, en dat kleine stapjes vaak de grootste vooruitgang betekenen.
					</p>

					<p>Mijn passie voor het werken met kinderen begon al veel vroeger. Als kind zat ik jarenlang bij de <span className="font-bold">Chiro</span> – eerst als lid, later als leiding. Nadien gaf ik ook <span className="font-bold">Kazou-kampen</span>, waar spel, verbondenheid en plezier centraal stonden. Die ervaringen neem ik vandaag nog elke dag mee in mijn werk: een veilige omgeving creëren waar kinderen zichzelf mogen zijn, durven bewegen en vol vertrouwen kunnen groeien.</p>

					<p>Met <span className="font-bold">KineKriebels</span> wil ik een warme plek aanbieden waar therapie speels, persoonlijk en op maat gebeurt. Waar kinderen kunnen ontdekken wat ze wél kunnen en waar ze met kleine succesjes grote sprongen maken.</p>
				</div>
				<div className="h-full w-1/3">
					<img src="/src/assets/myrthe.png" className="h-full mx-auto" alt="Logo" />
				</div>
			</div>
			
			<div className="h-[30vh]">
				<img src="/src/assets/about-bottom.png" className="h-full mx-auto" alt="Logo" />
			</div>
		</div>
	)
}
