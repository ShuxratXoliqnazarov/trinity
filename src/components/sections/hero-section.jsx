export default function HeroSection() {
	return (
		<section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink">
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_55%,#20232a_0%,#0c0c0e_70%)]" />
			<img
				src="/hero-car.jpg"
				alt=""
				onError={(e) => {
					e.currentTarget.style.display = "none"
				}}
				className="absolute inset-0 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-black/45" />
			<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-ink" />

			<div className="relative z-10 flex flex-col items-center px-6 text-center">
				<h1 className="font-display text-6xl font-bold leading-none text-white sm:text-7xl lg:text-[5.5rem]">
					Dubai
				</h1>
				<p className="mt-2 text-base font-normal uppercase tracking-[0.18em] text-white/90 sm:text-lg lg:text-xl">
					Luxury Car Rental
				</p>
			</div>

			<div className="absolute bottom-10 left-1/2 z-10 h-12 w-px -translate-x-1/2 bg-accent" />
		</section>
	)
}
