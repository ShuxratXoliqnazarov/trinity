import { LogoMark } from "../ui/icons"

export default function Logo({ className = "" }) {
	return (
		<a href="/" className={`flex flex-col items-center gap-1 ${className}`}>
			<LogoMark className="h-9 w-11 text-accent" />
			<span className="text-lg font-extrabold leading-none tracking-[0.3em] text-white">
				TRINITY
			</span>
			<span className="text-[7px] font-medium tracking-[0.28em] text-white/60">
				AUTO RENTAL BOUTIQUE
			</span>
		</a>
	)
}
