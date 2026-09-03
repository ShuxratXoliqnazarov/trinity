import { useTranslation } from "react-i18next"
import aboutUs from "../../assets/images/about-us.png"

const stats = [
	{ key: "years", value: "8" },
	{ key: "cars", value: "72" },
	{ key: "people", value: "190" },
]

function QuoteMark({ className = "" }) {
	return (
		<svg viewBox="0 0 44 32" className={className} fill="currentColor" aria-hidden="true">
			<path d="M0 32V18.4C0 8.6 5.6 1.6 16 0l1.8 4.8C11.9 6.7 8.6 10.4 8.6 14.6H18V32H0Zm25.6 0V18.4C25.6 8.6 31.2 1.6 41.6 0l1.8 4.8c-5.9 1.9-9.2 5.6-9.2 9.8H43.6V32H25.6Z" />
		</svg>
	)
}

export default function AboutSection() {
	const { t } = useTranslation()

	const quote = [
		{ text: t("about.quote.part1") },
		{ text: t("about.quote.accent1"), accent: true },
		{ text: t("about.quote.part2") },
		{ text: t("about.quote.accent2"), accent: true },
		{ text: t("about.quote.part3") },
	]

	return (
		<section id="about" className="relative overflow-hidden bg-ink pt-20 lg:pt-28">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_4%_0%,#152a31_0%,transparent_62%)]" />
			<svg
				viewBox="0 0 120 100"
				className="pointer-events-none absolute -top-4 right-0 h-40 w-44 text-white/[0.025] lg:h-56 lg:w-64"
				fill="currentColor"
				aria-hidden="true"
			>
				<path d="M20 0h22L22 50l20 50H20L0 50z" />
				<path d="M60 0h22L62 50l20 50H60L40 50z" />
			</svg>

			<div className="relative mx-auto max-w-[1400px] px-6 lg:px-14">
				<h2 className="text-center font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
					{t("about.title")}
				</h2>

				<div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8 lg:mt-20 lg:gap-16">
					{stats.map((item) => (
						<div key={item.key}>
							<div className="flex items-baseline gap-2">
								<span
									className="font-display text-5xl font-bold leading-none text-transparent lg:text-6xl"
									style={{ WebkitTextStroke: "2px var(--color-accent)" }}
								>
									{item.value}
								</span>
								<span className="font-display text-sm font-medium text-white lg:text-base">
									{t(`about.stats.${item.key}.unit`)}
								</span>
							</div>
							<p className="mt-4 max-w-[240px] text-xs leading-relaxed text-white/40">
								{t(`about.stats.${item.key}.text`)}
							</p>
						</div>
					))}
				</div>

				<div className="relative mx-auto mt-16 max-w-3xl px-10 sm:px-14 lg:mt-24 lg:px-20">
					<QuoteMark className="absolute left-0 top-0 h-7 w-10 text-accent/40 lg:h-9 lg:w-12" />
					<QuoteMark className="absolute bottom-0 right-0 h-7 w-10 rotate-180 text-accent/40 lg:h-9 lg:w-12" />

					<p className="text-center font-display text-lg font-bold italic leading-snug text-white sm:text-xl lg:text-2xl">
						{quote.map((part, index) => (
							<span
								key={`${index}-${part.text}`}
								className={part.accent ? "text-accent-bright" : undefined}
							>
								{part.text}
							</span>
						))}
					</p>

					<div className="mt-8 text-right lg:mt-10">
						<p className="font-display text-sm font-bold text-white lg:text-base">
							{t("about.authorName")}
						</p>
						<p className="mt-1 text-[11px] text-white/40">{t("about.authorRole")}</p>
					</div>
				</div>
			</div>

			<img
				src={aboutUs}
				alt={t("about.photoAlt")}
				className="mt-14 h-[280px] w-full object-cover sm:h-[420px] lg:mt-20 lg:h-[620px]"
			/>
		</section>
	)
}
