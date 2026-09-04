import { useEffect, useRef, useState } from "react"

const bars = [
	8, 14, 20, 32, 44, 30, 18, 10, 16, 26, 40, 52, 46, 30, 20, 12, 8, 14, 24, 38,
	50, 44, 28, 16, 10, 18, 30, 42, 34, 22, 14, 20, 34, 48, 40, 26, 16, 10, 14, 8,
]

function formatTime(sec) {
	if (!Number.isFinite(sec)) return "0:00"
	const m = Math.floor(sec / 60)
	const s = Math.floor(sec % 60)
	return `${m}:${s.toString().padStart(2, "0")}`
}

export default function AudioPlayer({ src, label = "Listen to our story", className = "" }) {
	const audioRef = useRef(null)
	const [playing, setPlaying] = useState(false)
	const [progress, setProgress] = useState(0)
	const [current, setCurrent] = useState(0)

	useEffect(() => {
		const audio = audioRef.current
		if (!audio) return
		function onTime() {
			setCurrent(audio.currentTime)
			setProgress(audio.duration ? audio.currentTime / audio.duration : 0)
		}
		function onEnd() {
			setPlaying(false)
			setProgress(0)
			setCurrent(0)
		}
		audio.addEventListener("timeupdate", onTime)
		audio.addEventListener("ended", onEnd)
		return () => {
			audio.removeEventListener("timeupdate", onTime)
			audio.removeEventListener("ended", onEnd)
		}
	}, [])

	function toggle() {
		const audio = audioRef.current
		if (!audio) return
		if (playing) {
			audio.pause()
			setPlaying(false)
		} else {
			audio.play().then(
				() => setPlaying(true),
				() => setPlaying(false),
			)
		}
	}

	function seek(e) {
		const audio = audioRef.current
		if (!audio || !audio.duration) return
		const rect = e.currentTarget.getBoundingClientRect()
		const ratio = (e.clientX - rect.left) / rect.width
		audio.currentTime = ratio * audio.duration
	}

	const activeBar = Math.round(progress * bars.length)

	return (
		<div
			className={`flex items-center gap-4 rounded-full bg-ink-card px-4 py-3 ${className}`}
		>
			<audio ref={audioRef} src={src} preload="metadata" />
			<button
				type="button"
				onClick={toggle}
				aria-label={playing ? "Pause" : "Play"}
				className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent-bright"
			>
				{playing ? (
					<svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
						<rect x="6" y="5" width="4" height="14" rx="1" />
						<rect x="14" y="5" width="4" height="14" rx="1" />
					</svg>
				) : (
					<svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
						<path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.29-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
					</svg>
				)}
			</button>

			<button
				type="button"
				onClick={seek}
				aria-label={label}
				className="flex h-10 min-w-0 flex-1 items-center gap-[2px]"
			>
				{bars.map((h, i) => (
					<span
						key={i}
						className={`h-full min-w-0 flex-1 rounded-full transition-colors ${
							i < activeBar ? "bg-accent-bright" : "bg-white/25"
						}`}
						style={{ maxHeight: `${h}%` }}
					/>
				))}
			</button>

			<span className="shrink-0 text-xs tabular-nums text-white/50">
				{formatTime(current)}
			</span>
		</div>
	)
}
