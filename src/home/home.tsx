
export const Home = () => {
	return (
		<div className="flex flex-col bg-primary items-center justify-center">
			<div className="bg-[url(/src/assets/top-background.png)] bg-no-repeat bg-top bg-fixed h-[25vh] w-screen"/>
			<div className="h-[50vh]">
				<img src="/src/assets/kine-kriebels.png" className="h-full mx-auto" alt="Logo" />
			</div>
			<div className="flex flex-col gap-3 w-full md:w-2/3 p-2">
				<h1 className="font-bold">🏠 Welkom bij KineKriebels!</h1>
				<p className="italic">Waar bewegen plezier wordt en elk kind mag groeien op zijn eigen tempo.</p>
				<p>Bij <span className="font-bold">KineKriebels</span> draait alles rond kinderen en hun unieke ontwikkeling. Sommige kinderen hebben wat extra ondersteuning nodig in hun motoriek, evenwicht, concentratie of zelfvertrouwen – en daar help ik graag bij.</p>

				<p>Als gespecialiseerde kinesitherapeut in <span className="font-bold">psychomotoriek bij kinderen</span>, bied ik begeleiding op maat, afgestemd op de noden van jouw kind. Dat doen we op een speelse, positieve en veilige manier – met kriebels voor beweging, spel en groei!</p>

				<h2 className="font-semibold">Wat mag je verwachten?</h2>
				<ul>
					<li className="ms-4">&bull; Een warme, kindvriendelijke omgeving</li>
					<li className="ms-4">&bull; Therapie in spelvorm, aangepast aan de leeftijd en interesses van je kind</li>
					<li className="ms-4">&bull; Ruimte voor plezier, succeservaringen en zelfvertrouwen</li>
					<li className="ms-4">&bull; Open communicatie met ouders</li>
				</ul>

				<p>Of het nu gaat om moeilijkheden met fijne motoriek, evenwicht, aandacht of zelfbeeld – bij KineKriebels werken we samen aan kleine stapjes die grote sprongen mogelijk maken.</p>
				
				<p>Benieuwd of ik iets voor jouw kind kan betekenen? Neem gerust contact op – ik help jullie graag verder</p>
			</div>
			<div className="h-[30vh]">
				<img src="/src/assets/home-bottom.png" className="h-full mx-auto" alt="Logo" />
			</div>
		</div>
	)
}
