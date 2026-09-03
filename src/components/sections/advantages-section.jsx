import { useTranslation } from "react-i18next"
import car1 from "../../assets/images/car1.png"
import car2 from "../../assets/images/car2.png"
import car3 from "../../assets/images/car3.png"
import car4 from "../../assets/images/car4.png"
import car5 from "../../assets/images/car5.png"
import car6 from "../../assets/images/car6.png"

const advantages = [
	{ key: "fleet", image: car1 },
	{ key: "delivery", image: car2 },
	{ key: "insurance", image: car3 },
	{ key: "privacy", image: car4 },
	{ key: "support", image: car5 },
	{ key: "premium", image: car6 },
]

export default function AdvantagesSection() {
	const { t } = useTranslation()

	return (
		<section id="advantages" className="bg-ink py-20 lg:py-28">
			<h2 className="px-6 text-center font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:px-14 lg:text-6xl">
				{t("advantages.title")}
			</h2>

			<div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
				{advantages.map((item) => (
					<article
						key={item.key}
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
								{t(`advantages.items.${item.key}`)}
							</p>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}
