export function LogoMark({ className = "" }) {
	return (
		<svg viewBox="0 0 48 44" className={className} fill="none" aria-hidden="true">
			<path d="M4 3h16l-8 13Z" fill="currentColor" opacity="0.7" />
			<path d="M28 3h16l-8 13Z" fill="currentColor" opacity="0.7" />
			<path d="M14 3h20l-10 17Z" fill="currentColor" />
			<path d="M17 22h14l-7 19Z" fill="currentColor" opacity="0.9" />
		</svg>
	)
}

export function BurgerIcon({ className = "" }) {
	return (
		<svg viewBox="0 0 32 12" className={className} fill="none" aria-hidden="true">
			<path d="M2 3h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
			<path d="M2 9h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
		</svg>
	)
}

export function CloseIcon({ className = "" }) {
	return (
		<svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
			<path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
		</svg>
	)
}

export function ChevronDown({ className = "" }) {
	return (
		<svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
			<path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

export function ChevronUp({ className = "" }) {
	return (
		<svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
			<path d="M4 10l4-4 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

export function SearchIcon({ className = "" }) {
	return (
		<svg viewBox="0 0 20 20" className={className} fill="none" aria-hidden="true">
			<circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
			<path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
		</svg>
	)
}

export function TelegramIcon({ className = "" }) {
	return (
		<svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
			<path d="M21.9 4.3 18.6 20c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-4.9L15.9 7c.4-.3-.1-.5-.6-.2L6.2 12.5l-4.8-1.5C.4 10.7.4 10 1.7 9.5L20.5 2.3c.9-.3 1.7.2 1.4 2Z" />
		</svg>
	)
}

export function WhatsappIcon({ className = "" }) {
	return (
		<svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
			<path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.8 14.1c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.8-.6-3-1.3-5-4.4-5.2-4.6-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.6c-.2.2-.4.4-.2.7.2.4.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.7 1.6.3.1.5.1.7-.1l.8-1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.3.1.2.1.7 0 1.2Z" />
		</svg>
	)
}
