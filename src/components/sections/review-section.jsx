import firstImg from "../../assets/images/first-img.png"
import fourthImg from "../../assets/images/fourth-img.png"
import secondImg from "../../assets/images/second-img.png"
import thirdImg from "../../assets/images/third-img.png"

const reviews = [
	{
		id: "aventador",
		image: firstImg,
		alt: "Client sitting on a chrome Lamborghini Aventador",
		hasPlay: false,
	},
	{
		id: "huracan",
		image: secondImg,
		alt: "Client with a blue Lamborghini Huracan at night",
		// the play badge is part of this photo, so no overlay is rendered on top of it
		hasPlay: false,
	},
	{
		id: "green-jacket",
		image: thirdImg,
		alt: "Client talking to the camera next to a car",
		hasPlay: false,
	},
	{
		id: "g-class",
		image: fourthImg,
		alt: "Client with a Lamborghini Aventador and a Mercedes G-Class",
		hasPlay: false,
	},
]

function PlayButton() {
	return (
		<span className="pointer-events-none absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent lg:h-16 lg:w-16">
			<svg
				viewBox="0 0 24 24"
				className="ml-0.5 h-5 w-5 text-white lg:h-6 lg:w-6"
				fill="currentColor"
				aria-hidden="true"
			>
				<path d="M8 5.5v13l11-6.5z" />
			</svg>
		</span>
	)
}

export default function ReviewSection() {
	return (
		<section id="reviews" className="bg-ink py-20 lg:py-28">
			<h2 className="px-6 text-center font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:px-14 lg:text-6xl">
				Reviews
			</h2>

			<div className="mt-12 flex snap-x snap-mandatory gap-1 overflow-x-auto [scrollbar-width:none] lg:mt-16 [&::-webkit-scrollbar]:hidden">
				{reviews.map((review) => (
					<article
						key={review.id}
						className="relative aspect-[9/16] w-[72vw] shrink-0 snap-start overflow-hidden bg-ink-card sm:w-[46vw] md:w-[34vw] lg:w-[25.5vw]"
					>
						<img
							src={review.image}
							alt={review.alt}
							className="h-full w-full object-cover"
						/>
						<div className="absolute inset-0 bg-black/25" />
						{review.hasPlay && <PlayButton />}
					</article>
				))}
			</div>
		</section>
	)
}
