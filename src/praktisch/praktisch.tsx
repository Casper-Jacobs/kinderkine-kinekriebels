
export const Praktisch = () => {
	return (
		<div className="flex flex-col bg-primary items-center justify-center">
			<div className="bg-[url(/src/assets/prak-top-bg.png)] bg-no-repeat bg-top bg-fixed h-[25vh] w-screen"/>
			<div className="flex flex-col gap-3 w-full md:w-2/3 p-2">
				<h1 className="font-bold text-xl">📋 Praktische info</h1>
				<p className="italic">Alle belangrijke info op een rijtje.</p>
				<p>Hieronder vind je alle praktische informatie over de werking van de praktijk. Heb je toch nog vragen? Aarzel niet om contact op te nemen – ik help je graag verder.</p>


				<h2 className="font-bold">🗓️ Afspraken</h2>
				<p>Alle sessies gaan door <span className="font-bold">op afspraak</span>.</p>
				<p>Zo kan ik voldoende tijd en aandacht voorzien voor elk kind.</p>

				<h2 className="font-semibold">📍 Locatie:</h2>
				<p>Kinderkine  KineKriebels</p>
				<p>Katteweidelaan 84</p>
				<p>3590 Diepenbeek</p>

				<h2 className="font-semibold">⏰ Uren:</h2>
				<p>Dinsdag & donderdag: 16u30-19u</p>
				<p>Zaterdag: 9u-12u</p>

				<h2 className="font-bold">⏱️ Duur van de sessie</h2>
				<ul>
					<li className="ms-4">&bull; Een sessie duurt <span className="font-bold">30 minuten</span></li>
					<li className="ms-4">&bull; Intakegesprek of eerste kennismaking kan iets langer duren</li>
				</ul>

				<h2 className="font-bold">💶 Tarieven</h2>
				<p>Als kinesitherapeut ben ik gedeconventioneerd.  Terugbetaling gebeurt volgens de tarieven van de mutualiteit.</p>

			</div>
			<div className="h-[30vh]">
				<img src="/src/assets/prak-bottom.png" className="h-full mx-auto" alt="Logo" />
			</div>
		</div>
	)
}
