import car1 from "../../assets/images/car1.png"
import car2 from "../../assets/images/car2.png"
import car3 from "../../assets/images/car3.png"
import car4 from "../../assets/images/car4.png"
import car5 from "../../assets/images/car5.png"
import car6 from "../../assets/images/car6.png"

const advantages = [
	{ text: "40+ unique cars for rent from our fleet", image: car1 },
	{ text: "Delivery and return of cars in Dubai 24/7", image: car2 },
	{ text: "Insurance without a deductible for each car", image: car3 },
	{ text: "No video or audio recording in the car", image: car4 },
	{ text: "24/7 technical support", image: car5 },
	{ text: "All models have a premium package", image: car6 },
]

export default function AdvantagesSection() {
	return (
		<section id="advantages" className="bg-ink py-20 lg:py-28">
			<h2 className="px-6 text-center font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:px-14 lg:text-6xl">
				Advantages
			</h2>

			<div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
				{advantages.map((item) => (
					<article
						key={item.text}
						className="group relative aspect-[3/2] overflow-hidden bg-ink"
					>
						<img
							src={item.image}
							alt=""
							className="h-full w-full object-cover transition duration-500 group-hover:brightness-150"
						/>
						<div className="absolute inset-0 bg-black/45 transition-colors duration-500 group-hover:bg-black/10" />
						<div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
							<p className="max-w-[270px] text-balance text-xs font-medium leading-relaxed text-white lg:text-sm">
								{item.text}
							</p>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}
