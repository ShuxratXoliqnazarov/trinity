import { useTranslation } from "react-i18next"

export default function HeroSection() {
	const { t } = useTranslation()

	return (
		<section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink">
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_55%,#20232a_0%,#0c0c0e_70%)]" />
			<img
				src="/hero-car.jpg"
				alt=""
				onError={(e) => {
					e.currentTarget.style.display = "none"
				}}
				className="absolute inset-0 h-full w-full object-cover object-[50%_42%]"
			/>
			<div className="absolute inset-0 bg-black/45" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_48%,rgba(0,0,0,0.55),transparent_70%)]" />
			<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-ink" />

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
