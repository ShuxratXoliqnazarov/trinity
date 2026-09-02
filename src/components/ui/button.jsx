const base =
	"inline-flex items-center justify-center gap-2 font-semibold uppercase tracking-[0.15em] transition-colors duration-200 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"

const variants = {
	primary: "bg-accent text-white hover:bg-accent-hover",
	outline:
		"border border-accent text-accent bg-transparent hover:bg-accent hover:text-white",
	ghost: "text-white/80 hover:text-white bg-transparent",
}

const sizes = {
	sm: "text-[11px] px-5 py-2 rounded-md",
	md: "text-xs px-9 py-4 rounded-md",
	lg: "text-sm px-12 py-5 rounded-md",
}

export default function Button({
	as: Tag = "button",
	variant = "primary",
	size = "md",
	fullWidth = false,
	className = "",
	children,
	...rest
}) {
	const classes = [
		base,
		variants[variant] ?? variants.primary,
		sizes[size] ?? sizes.md,
		fullWidth ? "w-full" : "",
		className,
	]
		.filter(Boolean)
		.join(" ")

	return (
		<Tag className={classes} {...rest}>
			{children}
		</Tag>
	)
}
