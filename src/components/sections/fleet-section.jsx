import { useState } from "react"
import Button from "../ui/button"

const tabs = ["Special Offer", "New car", "Most popular", "Daily"]

const cars = [
	{ name: "Lamborghini Urus", image: "/cars/urus.jpg" },
	{ name: "Ferrari Roma", image: "/cars/roma.jpg" },
	{ name: "Rolls-Royce Ghost", image: "/cars/ghost.jpg" },
	{ name: "Porsche 911 Turbo S", image: "/cars/911-turbo.jpg" },
]

function hideBroken(e) {
	e.currentTarget.style.visibility = "hidden"
}

export default function FleetSection() {
	const [tab, setTab] = useState(0)

	return (
		<section id="fleet" className="bg-ink px-6 py-20 lg:px-14 lg:py-28">
			<div className="mx-auto max-w-[1400px]">
				<div className="flex flex-wrap justify-center gap-8 lg:gap-14">
					{tabs.map((label, i) => (
						<button
							key={label}
							type="button"
							onClick={() => setTab(i)}
							className={`relative pb-2 font-display text-lg font-medium transition-colors lg:text-xl ${
								i === tab ? "text-white" : "text-white/45 hover:text-white/70"
							}`}
						>
							{label}
							{i === tab && (
								<span className="absolute inset-x-0 bottom-0 h-px bg-accent-bright" />
							)}
						</button>
					))}
				</div>

				<div className="mt-12 grid gap-5 sm:grid-cols-2">
					{cars.map((car) => (
						<article
							key={car.name}
							className="group relative aspect-[3/2] overflow-hidden rounded-sm bg-ink-card sm:aspect-[16/10]"
						>
							<img
								src={car.image}
								alt={car.name}
								onError={hideBroken}
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
							<div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-5">
								<h3 className="font-display text-lg font-medium text-white sm:text-xl">
									{car.name}
								</h3>
								<Button
									as="a"
									href="#contact"
									variant="secondary"
									size="none"
									className="rounded-md border-2 border-accent-bright px-8 py-3 text-xs sm:border sm:px-5 sm:py-2.5 sm:text-[11px]"
								>
									RENT
								</Button>
							</div>
						</article>
					))}
				</div>

				<div className="mt-12 flex justify-center">
					<Button
						as="a"
						href="#contact"
						size="md"
						className="w-full sm:w-auto"
					>
						VIEW ALL
					</Button>
				</div>
			</div>
		</section>
	)
}
