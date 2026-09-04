import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import Logo from "./logo"
import {
	BurgerIcon,
	ChevronDown,
	CloseIcon,
	TelegramIcon,
	WhatsappIcon,
} from "../ui/icons"

const navLinks = [
	{ key: "carList", href: "#fleet" },
	{ key: "aboutUs", href: "#about" },
	{ key: "contacts", href: "#contact" },
]

const menuLinks = [
	{ key: "carList", href: "#fleet" },
	{ key: "testimonials", href: "#reviews" },
	{ key: "yachtList", href: "#fleet" },
	{ key: "articles", href: "#about" },
	{ key: "chauffeur", href: "#contact" },
	{ key: "aboutUs", href: "#about" },
	{ key: "conditions", href: "#contact" },
	{ key: "contacts", href: "#contact" },
]

const cityKeys = ["dubai", "moscow", "budapest", "wiesbaden"]
const langs = [
	{ value: "en", label: "ENG" },
	{ value: "ru", label: "RUS" },
]
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

	const current = items.find((item) => item.value === value)

	return (
		<div ref={ref} className="relative">
			<button
				type="button"
				onClick={() => setOpen((v) => !v)}
				className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-white"
			>
				{current ? current.label : value}
				<ChevronDown
					className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
				/>
			</button>
			{open && (
				<ul className="absolute right-0 top-full z-50 mt-3 min-w-40 border border-line bg-ink-soft py-2">
					{items.map((item) => (
						<li key={item.value}>
							<button
								type="button"
								onClick={() => {
									onChange(item.value)
									setOpen(false)
								}}
								className={`block w-full px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:text-accent ${
									item.value === value ? "text-accent" : "text-white/80"
								}`}
							>
								{item.label}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default function Header() {
	const { t, i18n } = useTranslation()
	const [menuOpen, setMenuOpen] = useState(false)
	const [city, setCity] = useState(cityKeys[0])

	const cities = cityKeys.map((key) => ({
		value: key,
		label: t(`header.cities.${key}`),
	}))

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
							aria-label={t("header.openMenu")}
						>
							<BurgerIcon className="h-3 w-8" />
						</button>
						<nav className="hidden items-center gap-9 lg:flex">
							{navLinks.map((link) => (
								<a
									key={link.key}
									href={link.href}
									className="text-sm font-medium text-white/90 transition-colors hover:text-accent"
								>
									{t(`header.nav.${link.key}`)}
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
						<Dropdown
							items={langs}
							value={i18n.resolvedLanguage}
							onChange={(code) => i18n.changeLanguage(code)}
						/>
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
						aria-label={t("header.closeMenu")}
					>
						<CloseIcon className="h-7 w-7" />
					</button>
					<Logo />
					<Dropdown
						items={langs}
						value={i18n.resolvedLanguage}
						onChange={(code) => i18n.changeLanguage(code)}
					/>
				</div>

				<nav className="grid flex-1 content-center gap-x-10 gap-y-8 px-8 sm:gap-x-24 lg:mx-auto lg:max-w-3xl grid-cols-2">
					{menuLinks.map((link, i) => (
						<a
							key={`${link.key}-${i}`}
							href={link.href}
							onClick={() => setMenuOpen(false)}
							className="font-display text-2xl font-medium text-white transition-colors hover:text-accent-bright sm:text-3xl"
						>
							{t(`header.nav.${link.key}`)}
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

		</>
	)
}
