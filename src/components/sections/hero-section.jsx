import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"

export default function HeroSection() {
	const { t } = useTranslation()
	const videoRef = useRef(null)
	const rafRef = useRef(0)
	const [alwaysOn] = useState(
		() =>
			typeof window !== "undefined" &&
			window.matchMedia("(hover: none)").matches,
	)

	function reverseStep() {
		const video = videoRef.current
		if (!video) return
		const next = video.currentTime - 1 / 50
		if (next <= 0) {
			video.currentTime = 0
			video.play().catch(() => {})
			return
		}
		video.currentTime = next
		rafRef.current = requestAnimationFrame(reverseStep)
	}

	function startPlaying() {
		const video = videoRef.current
		if (!video) return
		cancelAnimationFrame(rafRef.current)
		video.play().catch(() => {})
	}

	function stopPlaying() {
		const video = videoRef.current
		if (!video) return
		cancelAnimationFrame(rafRef.current)
		video.pause()
		video.currentTime = 0
	}

	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		function onEnded() {
			cancelAnimationFrame(rafRef.current)
			rafRef.current = requestAnimationFrame(reverseStep)
		}
		video.addEventListener("ended", onEnded)

		if (alwaysOn) {
			video.play().catch(() => {})
		}

		return () => {
			video.removeEventListener("ended", onEnded)
			cancelAnimationFrame(rafRef.current)
		}
	}, [alwaysOn])

	return (
		<section
			onMouseEnter={startPlaying}
			onMouseLeave={stopPlaying}
			className="group relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink"
		>
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_55%,#20232a_0%,#0c0c0e_70%)]" />
			<video
				ref={videoRef}
				muted
				playsInline
				preload="auto"
				poster="/hero-lambo-poster.jpg"
				className="absolute inset-0 h-full w-full scale-[1.04] object-cover object-[50%_52%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
			>
				<source src="/hero-lambo.mp4" type="video/mp4" />
			</video>

			<div className="absolute inset-0 bg-black/35" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_48%,rgba(0,0,0,0.45),transparent_70%)]" />
			<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-ink" />
			<div className="absolute right-0 top-0 h-32 w-[28rem] bg-[linear-gradient(to_left,rgba(10,10,12,1)_0%,rgba(10,10,12,0.9)_25%,transparent_100%)]" />

			<div
				className={`pointer-events-none absolute inset-0 overflow-hidden mix-blend-screen transition-opacity duration-1000 ease-out group-hover:opacity-75 ${
					alwaysOn ? "opacity-45" : "opacity-30"
				}`}
			>
				<span className="smoke-a absolute -left-1/4 bottom-[-10%] h-[70%] w-[80%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(170,180,200,0.4),transparent_62%)] blur-3xl" />
				<span className="smoke-b absolute -right-1/4 bottom-0 h-[65%] w-[75%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(140,155,185,0.38),transparent_62%)] blur-3xl" />
				<span className="smoke-a absolute left-[15%] top-[25%] h-[50%] w-[60%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(160,170,195,0.28),transparent_60%)] blur-3xl [animation-delay:-11s] [animation-duration:36s]" />
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
