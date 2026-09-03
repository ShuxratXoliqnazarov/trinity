const base =
	"inline-flex items-center justify-center gap-2 font-semibold tracking-wide rounded-md transition-colors duration-200 cursor-pointer select-none disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"

const variants = {
	primary:
		"bg-accent text-white hover:bg-accent-bright disabled:bg-accent/30 disabled:text-white/40",
	secondary:
		"border border-accent text-white bg-transparent hover:bg-accent hover:text-white disabled:border-accent/30 disabled:text-white/40",
	ghost: "text-white/80 hover:text-white bg-transparent",
}

const sizes = {
	none: "",
	sm: "text-[11px] px-5 py-2.5",
	md: "text-xs px-9 py-4",
	lg: "text-sm px-12 py-5",
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
		variants[variant] ?? (variant === "outline" ? variants.secondary : variants.primary),
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
