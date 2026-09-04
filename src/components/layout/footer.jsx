import { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "../ui/button"
import {
	FacebookIcon,
	InstagramIcon,
	TelegramIcon,
	TiktokIcon,
	WhatsappIcon,
	YoutubeIcon,
} from "../ui/icons"

const phone = "+971 58 590 7875"

const payments = [
	"VISA",
	"MasterCard",
	"Amex",
	"Diners",
	"Tether",
	"G Pay",
	"Apple Pay",
	"CASH",
]

const socials = [
	{ Icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
	{ Icon: TiktokIcon, href: "https://tiktok.com", label: "TikTok" },
	{ Icon: YoutubeIcon, href: "https://youtube.com", label: "YouTube" },
	{ Icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
]

function LinkColumn({ title, items, twoCol = false }) {
	return (
		<div>
			<h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
				{title}
			</h3>
			<ul
				className={`mt-5 gap-x-6 gap-y-3 ${
					twoCol ? "grid grid-cols-2" : "flex flex-col"
				}`}
			>
				{items.map((label) => (
					<li key={label}>
						<a
							href="#top"
							className="text-sm text-white/80 transition-colors hover:text-accent-bright"
						>
							{label}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default function Footer() {
	const { t } = useTranslation()
	const [email, setEmail] = useState("")

	const columns = t("footer.columns", { returnObjects: true })
	const brands = t("footer.brands", { returnObjects: true })

	return (
		<footer className="bg-ink-soft">
			<div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-14">
				<ul className="flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-line/60 pb-8">
					{brands.map((brand, i) => (
						<li key={brand}>
							<a
								href="#fleet"
								className={`font-display text-lg font-medium transition-colors hover:text-white lg:text-xl ${
									i === 2 ? "text-white underline underline-offset-8" : "text-white/40"
								}`}
							>
								{brand}
							</a>
						</li>
					))}
				</ul>

				<div className="grid gap-10 py-12 lg:grid-cols-[repeat(3,auto)_1fr] lg:gap-16">
					<div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:contents">
						<LinkColumn
							title={columns.customers.title}
							items={columns.customers.items}
						/>
						<LinkColumn
							title={columns.carList.title}
							items={columns.carList.items}
						/>
						<div className="col-span-2 sm:col-span-1">
							<LinkColumn
								title={columns.carBrand.title}
								items={columns.carBrand.items}
								twoCol
							/>
						</div>
					</div>

					<div className="flex flex-col gap-5">
						<div className="flex items-center gap-3">
							<a
								href={`tel:${phone.replace(/\s/g, "")}`}
								className="text-lg font-semibold text-white"
							>
								{phone}
							</a>
							<a
								href="https://t.me/"
								target="_blank"
								rel="noreferrer"
								className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2aabee] text-white"
								aria-label="Telegram"
							>
								<TelegramIcon className="h-4 w-4" />
							</a>
							<a
								href="https://wa.me/"
								target="_blank"
								rel="noreferrer"
								className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25d366] text-white"
								aria-label="WhatsApp"
							>
								<WhatsappIcon className="h-4 w-4" />
							</a>
						</div>

						<Button size="sm" className="self-start">
							{t("footer.callback")}
						</Button>

						<p className="max-w-xs text-sm leading-relaxed text-white/70">
							{t("footer.address")}
						</p>

						<form
							onSubmit={(e) => e.preventDefault()}
							className="flex flex-col overflow-hidden rounded-lg border border-line bg-ink-card sm:flex-row"
						>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder={t("footer.emailPlaceholder")}
								className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
							/>
							<button
								type="submit"
								className="shrink-0 bg-accent px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-bright"
							>
								{t("footer.submit")}
							</button>
						</form>
					</div>
				</div>

				<ul className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line/60 py-8">
					{payments.map((name) => (
						<li
							key={name}
							className="text-xs font-semibold uppercase tracking-wide text-white/35"
						>
							{name}
						</li>
					))}
				</ul>

				<div className="flex flex-col items-center gap-4 border-t border-line/60 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
					<a
						href="#top"
						className="text-xs uppercase tracking-wide text-accent-bright"
					>
						{t("footer.privacy")}
					</a>
					<p className="text-xs text-white/40">{t("footer.copyright")}</p>
					<div className="flex items-center gap-4">
						{socials.map(({ Icon, href, label }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noreferrer"
								aria-label={label}
								className="text-white/60 transition-colors hover:text-accent-bright"
							>
								<Icon className="h-5 w-5" />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}
