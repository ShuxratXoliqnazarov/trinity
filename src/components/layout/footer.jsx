import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Autoplay, FreeMode } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import {
	FacebookIcon,
	InstagramIcon,
	TelegramIcon,
	TiktokIcon,
	WhatsappIcon,
	YoutubeIcon,
} from "../ui/icons"

const phone = "+971 58 590 7875"

// the brand strip highlights one item, as in the design
const activeBrand = 2

const payments = [
	"VISA",
	"MasterCard",
	"American Express",
	"UnionPay",
	"tether",
	"G Pay",
	"Apple Pay",
	"giropay",
	"CASH",
	"safetypay",
]

// swiper needs the strip wider than the viewport before loop mode works
const marqueePayments = [...payments, ...payments, ...payments]

const socials = [
	{ Icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
	{ Icon: TiktokIcon, href: "https://tiktok.com", label: "TikTok" },
	{ Icon: YoutubeIcon, href: "https://youtube.com", label: "YouTube" },
	{ Icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
]

const columnKeys = ["customers", "carList", "service"]

const columnLinks = {
	customers: ["#about", "#contact", "#reviews", "#about", "#contact"],
	carList: ["#fleet", "#fleet", "#fleet", "#fleet", "#fleet"],
	service: ["#fleet", "#fleet", "#contact"],
}

export default function Footer() {
	const { t } = useTranslation()
	const [email, setEmail] = useState("")
	const [sent, setSent] = useState(false)

	const brands = t("footer.brands", { returnObjects: true })
	const columns = t("footer.columns", { returnObjects: true })

	function handleSubmit(event) {
		event.preventDefault()
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return
		setEmail("")
		setSent(true)
	}

	return (
		<footer className="bg-ink">
			<div className="overflow-hidden border-b border-line/60">
				<ul className="flex items-center justify-center gap-12 whitespace-nowrap py-8 lg:gap-20 lg:py-10">
					{brands.map((brand, index) => (
						<li key={brand} className="shrink-0">
							<a
								href="#fleet"
								className={`relative font-display text-2xl font-medium transition-colors lg:text-[28px] ${
									index === activeBrand
										? "text-white"
										: "text-white/30 hover:text-white/60"
								}`}
							>
								{brand}
								{index === activeBrand && (
									<span className="absolute -bottom-2 left-0 h-0.5 w-full bg-accent-bright" />
								)}
							</a>
						</li>
					))}
				</ul>
			</div>

			<div className="mx-auto max-w-[1400px] px-6 lg:px-14">
				<div className="grid gap-12 py-12 lg:grid-cols-[1fr_auto] lg:gap-0 lg:py-14">
					<div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:gap-x-16 lg:pr-16">
						{columnKeys.map((key) => (
							<div key={key}>
								<h3 className="font-display text-[15px] font-bold text-white">
									{columns[key].title}
								</h3>
								<ul className="mt-6 flex flex-col gap-5">
									{columns[key].items.map((label, index) => (
										<li key={label}>
											<a
												href={columnLinks[key][index] ?? "#top"}
												className="text-sm text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline"
											>
												{label}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					<div className="flex flex-col gap-6 lg:w-[420px] lg:border-l lg:border-line/60 lg:pl-16">
						<div className="flex items-center gap-3">
							<a
								href={`tel:${phone.replace(/\s/g, "")}`}
								className="font-display text-2xl font-bold tracking-tight text-white"
							>
								{phone}
							</a>
							<a
								href="https://t.me/"
								target="_blank"
								rel="noreferrer"
								aria-label="Telegram"
								className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2aabee] text-white transition-transform hover:scale-110"
							>
								<TelegramIcon className="h-3.5 w-3.5" />
							</a>
							<a
								href="https://wa.me/"
								target="_blank"
								rel="noreferrer"
								aria-label="WhatsApp"
								className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25d366] text-white transition-transform hover:scale-110"
							>
								<WhatsappIcon className="h-3.5 w-3.5" />
							</a>
						</div>

						<a
							href="#contact"
							className="inline-flex items-center justify-center rounded-md border border-accent px-10 py-4 text-xs font-semibold tracking-[0.08em] text-white transition-colors hover:bg-accent sm:self-start"
						>
							{t("footer.callback")}
						</a>

						<p className="max-w-[270px] text-[15px] font-medium leading-relaxed text-white">
							{t("footer.address")}
						</p>

						<form onSubmit={handleSubmit} noValidate className="relative">
							<input
								type="email"
								value={email}
								onChange={(event) => {
									setEmail(event.target.value)
									setSent(false)
								}}
								placeholder={t("footer.emailPlaceholder")}
								aria-label={t("footer.emailPlaceholder")}
								className="w-full rounded-lg bg-ink-card py-5 pl-5 pr-32 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-accent"
							/>
							<button
								type="submit"
								className="absolute right-1.5 top-1.5 bottom-1.5 rounded-md bg-accent px-7 text-xs font-semibold tracking-[0.08em] text-white transition-colors hover:bg-accent-bright"
							>
								{t("footer.submit")}
							</button>
						</form>
						{sent && (
							<p className="text-xs text-accent-bright">{t("discount.success")}</p>
						)}
					</div>
				</div>
			</div>

			<div className="overflow-hidden border-t border-line/60 py-8">
				<Swiper
					modules={[Autoplay, FreeMode]}
					className="[&_.swiper-wrapper]:!ease-linear"
					slidesPerView="auto"
					spaceBetween={64}
					loop
					loopAdditionalSlides={payments.length}
					freeMode
					allowTouchMove={false}
					speed={2500}
					autoplay={{ delay: 0, disableOnInteraction: false }}
					aria-hidden="true"
				>
					{marqueePayments.map((name, index) => (
						<SwiperSlide key={`${name}-${index}`} className="!w-auto">
							<span className="font-display text-sm font-semibold uppercase tracking-wide text-white/20">
								{name}
							</span>
						</SwiperSlide>
					))}
				</Swiper>

				<ul className="sr-only">
					{payments.map((name) => (
						<li key={name}>{name}</li>
					))}
				</ul>
			</div>

			<div className="border-t border-line/60">
				<div className="mx-auto flex max-w-[1400px] flex-col items-center gap-5 px-6 py-6 text-center sm:grid sm:grid-cols-3 sm:text-left lg:px-14">
					<a
						href="#top"
						className="text-xs font-semibold text-accent-bright transition-colors hover:text-accent"
					>
						{t("footer.privacy")}
					</a>
					<p className="text-xs text-white/40 sm:text-center">
						{t("footer.copyright")}
					</p>
					<div className="flex items-center gap-5 sm:justify-end">
						{socials.map(({ Icon, href, label }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noreferrer"
								aria-label={label}
								className="text-accent-bright transition-colors hover:text-white"
							>
								<Icon className="h-4 w-4" />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}
