import { useTranslation } from "react-i18next"

export default function HeroSection() {
	const { t } = useTranslation()

	return (
		<section className="group relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink">
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_55%,#20232a_0%,#0c0c0e_70%)]" />
			<video
				autoPlay
				loop
				muted
				playsInline
				poster="/hero-car.jpg"
				className="absolute inset-0 h-full w-full scale-[1.08] object-cover object-[50%_40%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.13]"
			>
				<source src="/hero-car.mp4" type="video/mp4" />
			</video>

			<div className="absolute inset-0 bg-black/40" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_48%,rgba(0,0,0,0.5),transparent_70%)]" />
			<div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-ink" />
			<div className="absolute bottom-0 right-0 h-40 w-64 bg-[radial-gradient(ellipse_at_bottom_right,rgba(12,12,14,0.95),transparent_70%)]" />

			<div className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-500 ease-out group-hover:opacity-100">
				<span className="absolute left-[31%] top-[51%] h-28 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(205,225,255,1),rgba(130,180,255,0.4)_45%,transparent_72%)] blur-lg sm:h-36 sm:w-48" />
				<span className="absolute left-[69%] top-[51%] h-28 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(205,225,255,1),rgba(130,180,255,0.4)_45%,transparent_72%)] blur-lg sm:h-36 sm:w-48" />
				<span className="absolute left-1/2 top-[76%] h-28 w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgba(140,175,235,0.55),transparent_70%)] blur-2xl" />
			</div>

			<div className="relative z-10 flex flex-col items-center px-6 text-center">
				<h1 className="font-display text-5xl font-bold leading-none text-white sm:text-7xl lg:text-[5.5rem]">
					{t("hero.title")}
				</h1>
				<p className="mt-3 text-[11px] font-normal uppercase tracking-[0.28em] text-white/90 sm:mt-2 sm:text-lg sm:tracking-[0.18em] lg:text-xl">
					{t("hero.subtitle")}
				</p>
			</div>

			<div className="absolute bottom-8 left-1/2 z-10 h-10 w-px -translate-x-1/2 bg-accent sm:bottom-10 sm:h-12" />
		</section>
	)
}
