import { useState } from "react"
import Button from "../ui/button"
import { ChevronDown, ChevronUp, SearchIcon } from "../ui/icons"

const featured = {
	title: "Rent Lamborghini Huracan STO",
	priceLabel: "Rent is from aed",
	price: "2 400$",
	priceUnit: "per day",
	image: "/cars/huracan-sto.jpg",
}

const brands = [
	{ brand: "Audi", model: "Huracan EVO Spyder RS6" },
	{ brand: "Lamborghini", model: "Urus" },
	{ brand: "Lamborghini", model: "Huracan EVO Spyder" },
	{ brand: "Ferrari", model: "Roma" },
	{ brand: "Range Rover", model: "Autobiography New 2022" },
]

function hideBroken(e) {
	e.currentTarget.style.visibility = "hidden"
}

export default function PopularSection() {
	const [active, setActive] = useState(2)
	const [query, setQuery] = useState("")

	const list = brands.filter((b) =>
		`${b.brand} ${b.model}`.toLowerCase().includes(query.toLowerCase()),
	)

	return (
		<section id="popular" className="bg-ink px-6 py-20 lg:px-14 lg:py-28">
			<div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-2 lg:gap-16">
				<div className="relative overflow-hidden rounded-sm bg-ink-card">
					<img
						src={featured.image}
						alt={featured.title}
						onError={hideBroken}
						className="h-full max-h-[520px] w-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
					<div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
						<h3 className="max-w-[55%] font-display text-2xl font-medium leading-tight text-white">
							{featured.title}
						</h3>
						<div className="text-right">
							<p className="text-[11px] uppercase tracking-wide text-white/60">
								{featured.priceLabel}
							</p>
							<p className="font-display text-2xl font-semibold text-white">
								{featured.price}
							</p>
							<p className="text-[11px] text-white/60">{featured.priceUnit}</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col">
					<h2 className="font-display text-4xl font-medium text-white lg:text-5xl">
						Most Popular
					</h2>

					<div className="relative mt-8">
						<input
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							placeholder="Car search"
							className="w-full rounded-lg border border-line bg-ink-soft px-5 py-4 pr-12 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
						/>
						<SearchIcon className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
					</div>

					<div className="mt-8 flex gap-5">
						<div className="flex flex-col items-center justify-between py-1">
							<button
								type="button"
								onClick={() => setActive((i) => Math.max(0, i - 1))}
								className="text-white/40 transition-colors hover:text-white"
								aria-label="Previous"
							>
								<ChevronUp className="h-4 w-4" />
							</button>
							<span className="my-2 w-px flex-1 bg-line" />
							<button
								type="button"
								onClick={() =>
									setActive((i) => Math.min(brands.length - 1, i + 1))
								}
								className="text-white/40 transition-colors hover:text-white"
								aria-label="Next"
							>
								<ChevronDown className="h-4 w-4" />
							</button>
						</div>

						<ul className="flex-1 divide-y divide-line/60">
							{list.map((item) => {
								const idx = brands.indexOf(item)
								const isActive = idx === active
								return (
									<li key={`${item.brand}-${item.model}`}>
										<button
											type="button"
											onClick={() => setActive(idx)}
											className="flex w-full flex-col gap-1 py-4 text-left"
										>
											<span
												className={`font-display text-lg font-medium transition-colors ${
													isActive ? "text-accent-bright" : "text-white"
												}`}
											>
												{item.brand}
											</span>
											<span
												className={`text-sm transition-colors ${
													isActive ? "text-accent-bright/80" : "text-white/50"
												}`}
											>
												{item.model}
											</span>
										</button>
									</li>
								)
							})}
						</ul>
					</div>

					<div className="mt-10">
						<Button as="a" href="#fleet" size="md">
							VIEW ALL
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
