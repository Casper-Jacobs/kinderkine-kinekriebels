import { HeaderItem } from '../components/navigation-item'
import { EmailLarge } from '../components/social-buttons/email-large'
import { Facebook } from '../components/social-buttons/facebook'
import { Instagram } from '../components/social-buttons/instagram'
import { PhoneLarge } from '../components/social-buttons/phone-large'

export const Footer = () => {
	return (
		<div className="flex flex-col min-h-1/16 w-screen">
			<div className="self-center border-b-1 border-primary opacity-10 w-11/12"></div>
			<div className="self-center flex flex-row justify-center gap-3 flex-wrap w-full">
				<div className="flex flex-col justify-center p-5 mx-7 gap-2">
					<HeaderItem text="Home" link="home" color="text-primary" />
					<HeaderItem text="Contact" link="contact" color="text-primary" />
					{/* <HeaderItem text="Trimsalon" link="saloon" color="text-primary" />
					<HeaderItem text="Tarieven" link="pricing" color="text-primary" /> */}
				</div>
				<div className="flex flex-col justify-center p-5 gap-2">
					<h1 className="text-2xl text-primary font-bold mb-2">Contact</h1>
					<PhoneLarge />
					<EmailLarge />
				</div>
				<div className="flex flex-col p-5 gap-2">
					<h1 className="text-2xl text-primary font-bold mb-2">Socials</h1>
					<div className="flex flex-row justify-center items-center gap-5">
						<Instagram />
						<Facebook />
						{/* <Whatsapp /> */}
					</div>
				</div>
			</div>

			<div className="self-center border-b-1 border-primary opacity-10 shadow-top w-11/12"></div>
		</div>
	)
}
