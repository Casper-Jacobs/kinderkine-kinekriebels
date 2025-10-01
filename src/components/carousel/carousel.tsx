import { useMemo, useState } from 'react'
import img1 from '../../assets/gallery/1.jpeg'
import img10 from '../../assets/gallery/10.jpeg'
import img11 from '../../assets/gallery/11.jpeg'
import img12 from '../../assets/gallery/12.jpeg'
import img13 from '../../assets/gallery/13.jpeg'
import img14 from '../../assets/gallery/14.jpeg'
import img15 from '../../assets/gallery/15.jpeg'
import img16 from '../../assets/gallery/16.jpeg'
import img17 from '../../assets/gallery/17.jpeg'
import video18 from '../../assets/gallery/18.mp4'
import img2 from '../../assets/gallery/2.jpeg'
import img3 from '../../assets/gallery/3.jpeg'
import img4 from '../../assets/gallery/4.jpeg'
import img5 from '../../assets/gallery/5.jpeg'
import img6 from '../../assets/gallery/6.jpeg'
import img7 from '../../assets/gallery/7.jpeg'
import img8 from '../../assets/gallery/8.jpeg'
import img9 from '../../assets/gallery/9.jpeg'
import { Media } from './media'

const images: string[] = [
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	img9,
	img10,
	img11,
	img12,
	img13,
	img14,
	img15,
	img16,
	img17,
]
const videos: string[] = [video18]
const allMedia: string[] = [...images, ...videos]

export const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0)
	const shown: string[] = useMemo(() => {
		return [...allMedia, ...allMedia, ...allMedia].slice(
			currentIndex + allMedia.length,
			currentIndex + allMedia.length + 5
		)
	}, [currentIndex])

	const next = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % allMedia.length)
	}

	const prev = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + allMedia.length) % allMedia.length)
	}

	return (
		<div className="relative bg-primary h-[50vh] w-screen">
			<div className="flex flex-row h-full items-center gap-2 p-2 pe-10">
				{shown.map((media, index) => (
					<Media key={index} index={index} src={media} />
				))}
			</div>

			<button
				className="absolute top-[50%] translate-y-[-50%] left-0 bg-primary/80 hover:bg-primary drop-shadow-2xl shadow-2xl text-secondary rounded-full w-12 h-12 p-2 mx-5 hover:cursor-pointer hover:ms-3 transition-all duration-300 ease-in-out z-10"
				onClick={prev}
			>
				&lt;
			</button>

			<button
				className="absolute top-[50%] translate-y-[-50%] right-0 bg-primary/80 hover:bg-primary drop-shadow-2xl shadow-2xl text-secondary rounded-full w-12 h-12 p-2 mx-5 hover:cursor-pointer hover:me-3 transition-all duration-300 ease-in-out z-10"
				onClick={next}
			>
				&gt;
			</button>
		</div>
	)
}
