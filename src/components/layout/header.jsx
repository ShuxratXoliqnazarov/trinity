import { useEffect, useRef, useState } from "react"
import Logo from "./logo"
import {
	BurgerIcon,
	ChevronDown,
	CloseIcon,
	TelegramIcon,
	WhatsappIcon,
} from "../ui/icons"

const navLinks = [
	{ label: "Car List", href: "#fleet" },
	{ label: "About Us", href: "#about" },
	{ label: "Contacts", href: "#contact" },
]

const menuLinks = [
	{ label: "Car List", href: "#fleet" },
	{ label: "Testimonials", href: "#reviews" },
	{ label: "Yacht list", href: "#fleet" },
	{ label: "Articles", href: "#about" },
	{ label: "Chauffeur", href: "#contact" },
	{ label: "About Us", href: "#about" },
	{ label: "Conditions", href: "#contact" },
	{ label: "Contacts", href: "#contact" },
]

const cities = ["Dubai", "Moscow", "Budapest", "Wiesbaden"]
const langs = ["ENG", "RUS"]
const phone = "+971 58 590 7875"

function Dropdown({ items, value, onChange }) {
	const [open, setOpen] = useState(false)
	const ref = useRef(null)

	useEffect(() => {
		function onDocClick(e) {
			if (ref.current && !ref.current.contains(e.target)) setOpen(false)
		}
		document.addEventListener("mousedown", onDocClick)
		return () => document.removeEventListener("mousedown", onDocClick)
	}, [])

	return (
		<div ref={ref} className="relative">
			<button
				type="button"
				onClick={() => setOpen((v) => !v)}
				className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-white"
			>
				{value}
				<ChevronDown
					className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
				/>
			</button>
			{open && (
				<ul className="absolute right-0 top-full z-50 mt-3 min-w-40 border border-line bg-ink-soft py-2">
					{items.map((item) => (
						<li key={item}>
							<button
								type="button"
								onClick={() => {
									onChange(item)
									setOpen(false)
								}}
								className={`block w-full px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:text-accent ${
									item === value ? "text-accent" : "text-white/80"
								}`}
							>
								{item}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false)
	const [city, setCity] = useState(cities[0])
	const [lang, setLang] = useState(langs[0])

	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : ""
		return () => {
			document.body.style.overflow = ""
		}
	}, [menuOpen])

	return (
		<>
			<header className="absolute inset-x-0 top-0 z-40">
				<div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-7 lg:px-14">
					<div className="flex items-center gap-10">
						<button
							type="button"
							onClick={() => setMenuOpen(true)}
							className="text-white"
							aria-label="Open menu"
						>
							<BurgerIcon className="h-3 w-8" />
						</button>
						<nav className="hidden items-center gap-9 lg:flex">
							{navLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									className="text-sm font-medium text-white/90 transition-colors hover:text-accent"
								>
									{link.label}
								</a>
							))}
						</nav>
					</div>

					<div className="pointer-events-none absolute left-1/2 -translate-x-1/2">
						<div className="pointer-events-auto">
							<Logo />
						</div>
					</div>

					<div className="flex items-center gap-8">
						<a
							href={`tel:${phone.replace(/\s/g, "")}`}
							className="hidden text-sm font-semibold tracking-wide text-white lg:block"
						>
							{phone}
						</a>
						<div className="hidden lg:block">
							<Dropdown items={cities} value={city} onChange={setCity} />
						</div>
						<Dropdown items={langs} value={lang} onChange={setLang} />
					</div>
				</div>
			</header>

			<div
				className={`fixed inset-0 z-50 flex flex-col bg-ink-soft transition-opacity duration-300 ${
					menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
				}`}
			>
				<div className="flex items-center justify-between px-6 py-7 lg:px-14">
					<button
						type="button"
						onClick={() => setMenuOpen(false)}
						className="text-white"
						aria-label="Close menu"
					>
						<CloseIcon className="h-7 w-7" />
					</button>
					<Logo />
					<Dropdown items={langs} value={lang} onChange={setLang} />
				</div>

				<nav className="grid flex-1 content-center gap-x-10 gap-y-8 px-8 sm:gap-x-24 lg:mx-auto lg:max-w-3xl grid-cols-2">
					{menuLinks.map((link, i) => (
						<a
							key={`${link.label}-${i}`}
							href={link.href}
							onClick={() => setMenuOpen(false)}
							className="font-display text-2xl font-medium text-white transition-colors hover:text-accent-bright sm:text-3xl"
						>
							{link.label}
						</a>
					))}
				</nav>

				<div className="flex items-center gap-5 px-8 py-10">
					<a
						href={`tel:${phone.replace(/\s/g, "")}`}
						className="text-base font-semibold tracking-wide text-white"
					>
						{phone}
					</a>
					<a
						href="https://t.me/"
						target="_blank"
						rel="noreferrer"
						className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2aabee] text-white"
						aria-label="Telegram"
					>
						<TelegramIcon className="h-4 w-4" />
					</a>
					<a
						href="https://wa.me/"
						target="_blank"
						rel="noreferrer"
						className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25d366] text-white"
						aria-label="WhatsApp"
					>
						<WhatsappIcon className="h-4 w-4" />
					</a>
				</div>
			</div>

			<div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
				<a
					href="https://t.me/"
					target="_blank"
					rel="noreferrer"
					className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2aabee] text-white transition-transform hover:scale-105"
					aria-label="Telegram"
				>
					<TelegramIcon className="h-5 w-5" />
				</a>
				<a
					href="https://wa.me/"
					target="_blank"
					rel="noreferrer"
					className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25d366] text-white transition-transform hover:scale-105"
					aria-label="WhatsApp"
				>
					<WhatsappIcon className="h-5 w-5" />
				</a>
			</div>
		</>
	)
}
