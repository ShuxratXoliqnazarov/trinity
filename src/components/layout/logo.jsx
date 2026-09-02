export default function Logo({ className = "" }) {
	return (
		<a href="/" className={`block ${className}`}>
			<img src="/logo.svg" alt="Trinity" className="h-14 w-auto" />
		</a>
	)
}
