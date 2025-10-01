export const Contact = () => {
	return (
		<div className="flex flex-col bg-primary items-center justify-center">
			<div className="bg-[url(/src/assets/top-background.png)] bg-no-repeat bg-top bg-fixed h-[25vh] w-screen"/>
			<div className="flex flex-col gap-3 w-full md:w-2/3 p-2">
				<h1 className="font-bold">📞 Contact</h1>
				<p className="italic">Heb je een vraag of wil je een afspraak maken? Ik help je graag verder!</p>
				<p>Ben je op zoek naar ondersteuning voor je kind of heb je vragen over de therapie?
					Wil je graag kennismaken of een eerste afspraak inplannen?</p>

				<p>Klik dan op de knop hieronder en vul het formulier in.</p>
				<p>Ik neem zo snel mogelijk contact met je op om verder af te spreken.</p>
				<p>👇</p>

				<div>
					<button
						className='bg-secondary/1 outline-1 outline-secondary text-secondary font-bold py-2 px-4 rounded cursor-pointer hover:shadow-md'
						onClick={() => { window.open('https://docs.google.com/forms/d/e/1FAIpQLSdaM1rW6rMda9j4tG3F1rBoFtBJRcXRqHWUXiKotCKsNW0CNA/viewform', '_blank') }}>
						Maak een afspraak
					</button>
				</div>

				<p>Liever rechtstreeks contact opnemen? Dat kan natuurlijk ook:</p>

				<p>📧 <span className="font-bold">E-mail</span>: myrthe.kinekriebels@gmail.com</p>
				<p>📱 <span className="font-bold">Telefoon</span>: 0471/ 67 18 26</p>

				<p>Ik kijk ernaar uit om jullie te ontmoeten bij <span className="font-bold">KineKriebels</span>!</p>
			</div>
			<div className="h-[30vh]">
				<img src="/src/assets/home-bottom.png" className="h-full mx-auto" alt="Logo" />
			</div>
		</div>
	)
}