export default function Logo({ className = "" }) {
	return (
		<a href="/" className={`block ${className}`}>
			<img src="/logo.svg" alt="Trinity" className="hidden h-14 w-auto lg:block" />
			<img src="/logo-mark.svg" alt="Trinity" className="h-9 w-auto lg:hidden" />
		</a>
	)
}
