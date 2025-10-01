import knip from '../../assets/price-list/knip.png'
import norm from '../../assets/price-list/norm.png'
import was from '../../assets/price-list/was.png'
import paw from './paw-svgrepo-com.svg'

interface PriceListProps {
	className?: string
}

/**
 * 
 * Wat zit er in een all-in trimbeurt
•⁠  ⁠nagels knippen
•⁠  ⁠oren proper maken en indien nodig uitplukken
•⁠  ⁠wassen en drogen
•⁠  ⁠borstelen en in model zetten


Wat zit er in een Onderhoudsbeurt
•⁠  ⁠Beperkt bijwerken van vb: gezicht, pootjes, nagels
Of
•⁠  ⁠Enkel een wasbeurt
 */
const cardClass = 'card flex flex-row bg-white w-full md:w-1/2 lg:w-1/3 xl:w-1/4 self-stretch'
export const PriceList = (props: PriceListProps) => {
	return (
		<div className={props.className}>
			<div className={cardClass}>
				<div className="flex flex-col w-full">
					<div className="flex flex-row justify-center items-center w-full">
						<img src={was} alt="All-in trimbeurt" className="w-1/3 h-auto m-4" />
					</div>
					<span>
						<h1 className="text-2xl font-bold m-4 mb-0">Standaard behandeling</h1>
						<p className="font-bold m-4 text-primary/70 mt-0">
							Om je hondje weer helemaal op te knappen.
						</p>
					</span>
					<span className="flex flex-row items-end">
						<h1 className="text-4xl font-bold mt-4 mb-0">€ 55</h1>
						<span className="text-primary/70 ms-1">/Per uur</span>
					</span>
					<span>
						<p className="font-bold m-4 text-primary/70 mb-0">Wat zit erin.</p>
						<ul className="flex flex-col m-4 mt-0">
							<li className="flex flex-row justify-start items-center gap-2">
								<img src={paw} alt="star" className="size-4" /> Nagels knippen
							</li>
							<li className="flex flex-row justify-start items-center gap-2">
								<img src={paw} alt="star" className="size-4" /> Oren proper maken
							</li>
							<li className="flex flex-row justify-start items-center gap-2">
								<img src={paw} alt="star" className="size-4" /> Wassen en drogen
							</li>
							<li className="flex flex-row justify-start items-center gap-2">
								<img src={paw} alt="star" className="size-4" /> Borstelen en in
								model zetten
							</li>
						</ul>
						<p className="font-bold m-4 text-primary/70 mb-0">Extras.</p>
						<ul className="flex flex-col m-4 mt-0">
							<li className="flex flex-row justify-between items-start gap-2">
								<span className="flex flex-row gap-2">
									<img src={paw} alt="star" className="size-4" /> Vlooien
									behandeling
								</span>
								<p className="font-black mb-0 text-nowrap">€ 15</p>
							</li>
						</ul>
					</span>
				</div>
			</div>

			<div className={cardClass}>
				<div className="flex flex-col w-full">
					<div className="flex flex-row justify-center items-center w-full">
						<img src={knip} alt="Kleine behandeling" className="w-1/3 h-auto m-4" />
					</div>
					<span>
						<h1 className="text-2xl font-bold m-4 mb-0">Kleine behandeling</h1>
						<p className="font-bold m-4 text-primary/70 mt-0">
							Naast een all-in trimbeurt kan u ook voor kleine behandelingen kiezen.
						</p>
					</span>

					<span>
						<p className="font-bold m-4 text-primary/70 mb-0">
							Waar kan je uit kiezen.
						</p>
						<ul className="flex flex-col m-4 mt-0">
							<li className="flex flex-row justify-between items-start gap-2">
								<span className="flex flex-row gap-2">
									<img src={paw} alt="star" className="size-4 mt-1" /> Nagels
									knippen
								</span>
								<p className="font-black mb-0 text-nowrap">€ 10</p>
							</li>
							<li className="flex flex-row justify-between items-start gap-2">
								<span className="flex flex-row gap-2">
									<img src={paw} alt="star" className="size-4 mt-1" /> Oogjes
									vrijmaken
								</span>
								<p className="font-black mb-0 text-nowrap">€ 10</p>
							</li>
							<li className="flex flex-row justify-between items-start gap-2">
								<span className="flex flex-row gap-2">
									<img src={paw} alt="star" className="size-4 mt-1" /> Voetjes
									uitscheren en rondzetten
								</span>
								<p className="font-black mb-0 text-nowrap">€ 15</p>
							</li>
							<li className="flex flex-col justify-between items-start">
								<span className="flex flex-row justify-start items-center gap-2 pb-0">
									<img src={paw} alt="star" className="size-4 mt-1" /> Wasbeurt
								</span>
								<p className="font-black text-sm text-primary/70 ms-6 mt-0 pt-0">
									Prijs afhankelijk van grootte
								</p>
							</li>
						</ul>
					</span>
				</div>
			</div>

			<div className={cardClass}>
				<div className="flex flex-col w-full">
					<div className="flex flex-row justify-center items-center w-full">
						<img src={norm} alt="Puppygewenning" className="w-1/3 h-auto m-4" />
					</div>
					<span>
						<h1 className="text-2xl font-bold m-4 mb-0">Puppygewenning</h1>
					</span>
					{/* <span className="flex flex-row items-end">
						<h1 className="text-4xl font-bold mt-4 mb-0">€ 45</h1>
					</span> */}
					<span>
						<p className="font-bold m-4 text-primary/70 mb-0">Wat zit erin.</p>
						<ul className="flex flex-col m-4 mt-0">
							<li className="flex flex-row justify-start items-start gap-2">
								<img src={paw} alt="star" className="size-4 mt-1" /> Op een speelse
								manier laten we de pup gewoon worden aan de geluiden en voorwerpen
								in het trimsalon.
							</li>
							<li className="flex flex-row justify-start items-start gap-2">
								<img src={paw} alt="star" className="size-4 mt-1" /> De pup wordt
								gewassen, gedroogd en de voetjes worden rond gezet.
							</li>
							<li className="flex flex-row justify-start items-start gap-2">
								<img src={paw} alt="star" className="size-4 mt-1" /> Na de trimbeurt
								mag de pup op verkenning in het trimsalon en zorgen we voor een
								positief einde na de behandeling.
							</li>
						</ul>
					</span>
				</div>
			</div>
		</div>
	)
}
