import { useState } from 'react'
import close from '../assets/close-bold.svg'
import { GroomerPlanet } from './groomer-planet'
import { DefaultModal } from './modal/default-modal'

interface Props {
	className?: string
	contentClassName?: string
}
export const AppointmentButton = (props: Props) => {
	const [showModal, setShowModal] = useState<boolean>(false)
	return (
		<>
			<button
				onClick={() => setShowModal(true)}
				className={
					props.className ??
					'relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xl font-extrabold text-[#483e3c] rounded-full group bg-gradient-to-br from-[#ac9986] to-[#483e3c] group-hover:from-[#ac9986] group-hover:to-[#483e3c] hover:text-white focus:ring-3 focus:outline-none focus:ring-[#ac9986]/70 shadow-xl drop-shadow-xl'
				}
			>
				<span
					className={
						props.contentClassName ??
						'relative px-6 py-4 transition-all ease-in duration-200 bg-white rounded-full group-hover:bg-transparent'
					}
				>
					<span></span>
					<span>Maak een afspraak</span>
				</span>
			</button>
			{showModal && (
				<DefaultModal
					className="bg-[#f9f9f9] overflow-hidden rounded-t-xl sm:rounded-xl shadow-lg shadow-[#f9f9f9]/50 w-full sm:w-11/12 h-full sm:h-[90vh] transition-all duration-300 ease-in-out"
					show={showModal}
					handleClose={() => setShowModal(false)}
				>
					<span className="flex justify-end w-full text-2xl sm:hidden bg-[#f9f9f9]">
						<img
							src={close}
							alt="chevron down"
							className="w-8 h-8 me-3 mt-3"
							onClick={() => setShowModal(false)}
						/>
					</span>
					<GroomerPlanet />
				</DefaultModal>
			)}
		</>
	)
}
