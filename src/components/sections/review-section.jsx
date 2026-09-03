import { useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const reviews = [
	{ id: "aventador", src: "/videos/review-1.mp4", poster: "/videos/review-1.jpg" },
	{ id: "huracan", src: "/videos/review-2.mp4", poster: "/videos/review-2.jpg" },
	{ id: "greenJacket", src: "/videos/review-3.mp4", poster: "/videos/review-3.jpg" },
	{ id: "gClass", src: "/videos/review-4.mp4", poster: "/videos/review-4.jpg" },
]

function Chevron({ className = "" }) {
	return (
		<svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
			<path
				d="M15 5l-7 7 7 7"
				stroke="currentColor"
				strokeWidth="1.6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

function NavButton({ onClick, disabled, label, flip = false }) {
	return (
		<button
			type="button"
			onClick={onClick}
			disabled={disabled}
			aria-label={label}
			className="group/nav rounded-full bg-[linear-gradient(200deg,#00a3a933_0%,#00a3a9_55%,#33b7bc_100%)] p-px transition-all duration-300 hover:bg-[linear-gradient(200deg,#33b7bc_0%,#00a3a9_50%,#33b7bc_100%)] hover:shadow-[0_0_22px_rgba(0,163,169,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-30"
		>
			<span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink">
				<Chevron
					className={`h-4 w-4 text-white/35 transition-colors duration-300 group-hover/nav:text-accent-bright ${
						flip ? "rotate-180" : ""
					}`}
				/>
			</span>
		</button>
	)
}

function PlayButton() {
	return (
		<span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent lg:h-16 lg:w-16">
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

function ReviewCard({ src, poster, label, onStart, onStop }) {
	const videoRef = useRef(null)
	const [playing, setPlaying] = useState(false)

	function toggle() {
		const video = videoRef.current
		if (!video) return
		if (video.paused) {
			video.play().catch(() => {})
		} else {
			video.pause()
		}
	}

	return (
		<article className="group relative aspect-[9/16] overflow-hidden bg-ink-card">
			<video
				ref={videoRef}
				src={src}
				poster={poster}
				preload="metadata"
				muted
				playsInline
				onPlay={() => {
					setPlaying(true)
					onStart(videoRef.current)
				}}
				onPause={() => {
					setPlaying(false)
					onStop(videoRef.current)
				}}
				onEnded={() => {
					setPlaying(false)
					onStop(videoRef.current)
				}}
				className="h-full w-full object-cover"
			/>

			<button
				type="button"
				onClick={toggle}
				aria-label={label}
				aria-pressed={playing}
				className="absolute inset-0 flex cursor-pointer items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-bright"
			>
				<span
					className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
						playing ? "opacity-0" : "opacity-0 group-hover:opacity-100"
					}`}
				/>
				<span
					className={`relative transition-all duration-300 ${
						playing
							? "scale-90 opacity-0"
							: "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
					}`}
				>
					<PlayButton />
				</span>
			</button>
		</article>
	)
}

export default function ReviewSection() {
	const { t } = useTranslation()
	const activeVideo = useRef(null)
	const [swiper, setSwiper] = useState(null)
	const [atStart, setAtStart] = useState(true)
	const [atEnd, setAtEnd] = useState(false)

	function syncEdges(instance) {
		setAtStart(instance.isBeginning)
		setAtEnd(instance.isEnd)
	}

	// only one card may play at a time: starting a video pauses the previous one
	function handleStart(video) {
		const previous = activeVideo.current
		if (previous && previous !== video) previous.pause()
		activeVideo.current = video
	}

	function handleStop(video) {
		if (activeVideo.current === video) activeVideo.current = null
	}

	return (
		<section id="reviews" className="bg-ink py-20 lg:py-28">
			<h2 className="px-6 text-center font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:px-14 lg:text-6xl">
				{t("reviews.title")}
			</h2>

			<Swiper
				className="mt-12 lg:mt-16"
				spaceBetween={4}
				slidesPerView={2.2}
				breakpoints={{ 1024: { slidesPerView: 4, spaceBetween: 4 } }}
				onSwiper={(instance) => {
					setSwiper(instance)
					syncEdges(instance)
				}}
				onSlideChange={syncEdges}
				onResize={syncEdges}
			>
				{reviews.map((review) => (
					<SwiperSlide key={review.id}>
						<ReviewCard
							src={review.src}
							poster={review.poster}
							label={t(`reviews.alt.${review.id}`)}
							onStart={handleStart}
							onStop={handleStop}
						/>
					</SwiperSlide>
				))}
			</Swiper>

			<div className="mt-10 flex items-center justify-center gap-6 lg:hidden">
				<NavButton
					onClick={() => swiper?.slidePrev()}
					disabled={atStart}
					label={t("reviews.previous")}
				/>
				<NavButton
					onClick={() => swiper?.slideNext()}
					disabled={atEnd}
					label={t("reviews.next")}
					flip
				/>
			</div>
		</section>
	)
}
