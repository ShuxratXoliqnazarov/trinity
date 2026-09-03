import { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "../ui/button"

const address = "24 4th St - Al Quoz - Al Quoz Industrial Area 3 - Dubai"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const emptyRequest = { name: "", email: "", phone: "", message: "" }

const fields = [
	{ name: "name", type: "text" },
	{ name: "email", type: "email" },
	{ name: "phone", type: "tel" },
]

function EnvelopeIcon({ className = "" }) {
	return (
		<svg viewBox="0 0 20 20" className={className} fill="none" aria-hidden="true">
			<rect x="2" y="4.5" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
			<path d="M3 6l7 5 7-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

const inputBase =
	"w-full rounded-lg border bg-ink-soft px-5 py-4 text-sm text-white transition-colors placeholder:text-white/35 focus:outline-none"

export default function ContactSection() {
	const { t, i18n } = useTranslation()

	const [request, setRequest] = useState(emptyRequest)
	const [errors, setErrors] = useState({})
	const [requestSent, setRequestSent] = useState(false)

	const [subscribeEmail, setSubscribeEmail] = useState("")
	const [subscribeError, setSubscribeError] = useState("")
	const [subscribed, setSubscribed] = useState(false)

	const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
		address,
	)}&z=13&hl=${i18n.resolvedLanguage}&iwloc=&output=embed`

	function handleChange(event) {
		const { name, value } = event.target
		setRequest((prev) => ({ ...prev, [name]: value }))
		setErrors((prev) => ({ ...prev, [name]: "" }))
		setRequestSent(false)
	}

	function handleRequestSubmit(event) {
		event.preventDefault()
		const nextErrors = {}
		if (!request.name.trim()) nextErrors.name = "name"
		if (!emailPattern.test(request.email.trim())) nextErrors.email = "email"
		if (!request.phone.trim()) nextErrors.phone = "phone"

		setErrors(nextErrors)
		if (Object.keys(nextErrors).length > 0) return

		setRequest(emptyRequest)
		setRequestSent(true)
	}

	function handleSubscribeSubmit(event) {
		event.preventDefault()
		if (!emailPattern.test(subscribeEmail.trim())) {
			setSubscribeError("discount.error")
			return
		}
		setSubscribeError("")
		setSubscribeEmail("")
		setSubscribed(true)
	}

	return (
		<section id="contact" className="bg-ink">
			<div className="mx-auto grid max-w-[1600px] items-center gap-12 px-6 py-20 lg:grid-cols-[1.6fr_1fr] lg:gap-12 lg:py-24 lg:pl-0 lg:pr-20">
				<iframe
					src={mapSrc}
					title={t("contact.mapTitle", { address })}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					className="h-[340px] w-full rounded-2xl border-0 sm:h-[420px] lg:h-[460px]"
				/>

				<div>
					<h2 className="font-display text-4xl font-bold tracking-tight text-white lg:text-5xl">
						{t("contact.title")}
					</h2>

					<form onSubmit={handleRequestSubmit} noValidate className="mt-8 flex flex-col gap-3">
						{fields.map((field) => (
							<div key={field.name}>
								<input
									name={field.name}
									type={field.type}
									value={request[field.name]}
									onChange={handleChange}
									placeholder={t(`contact.fields.${field.name}`)}
									aria-label={t(`contact.fields.${field.name}`)}
									className={`${inputBase} ${
										errors[field.name]
											? "border-red-500/70"
											: "border-line focus:border-accent"
									}`}
								/>
								{errors[field.name] && (
									<p className="mt-1 text-[11px] text-red-400">
										{t(`contact.errors.${errors[field.name]}`)}
									</p>
								)}
							</div>
						))}

						<textarea
							name="message"
							value={request.message}
							onChange={handleChange}
							placeholder={t("contact.fields.message")}
							aria-label={t("contact.fields.message")}
							rows={4}
							className={`${inputBase} resize-none border-line focus:border-accent`}
						/>

						<div className="mt-3 flex flex-wrap items-center gap-4">
							<Button type="submit" size="sm" className="w-full sm:w-auto">
								{t("contact.submit")}
							</Button>
							{requestSent && (
								<p className="text-xs text-accent-bright">{t("contact.success")}</p>
							)}
						</div>
					</form>
				</div>
			</div>

			<div className="relative overflow-hidden bg-[linear-gradient(115deg,#0a1d24_0%,#0e2c35_45%,#091216_100%)] px-6 py-16 lg:px-14 lg:py-24">
				<svg
					viewBox="0 0 400 400"
					className="pointer-events-none absolute -right-20 top-1/2 h-[440px] w-[440px] -translate-y-1/2 text-white/[0.07] lg:h-[560px] lg:w-[560px]"
					fill="none"
					aria-hidden="true"
				>
					{[70, 110, 150, 190].map((radius) => (
						<circle
							key={radius}
							cx="200"
							cy="200"
							r={radius}
							stroke="currentColor"
							strokeWidth="1"
						/>
					))}
				</svg>

				<svg
					className="pointer-events-none absolute bottom-8 right-10 h-20 w-32 text-white/25"
					aria-hidden="true"
				>
					<defs>
						<pattern id="discount-dots" width="11" height="11" patternUnits="userSpaceOnUse">
							<circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#discount-dots)" />
				</svg>

				<div className="relative mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-10 text-center lg:px-14 lg:py-12">
					<h3 className="font-display text-2xl font-bold text-white lg:text-3xl">
						{t("discount.titleStart")}
						<span className="text-accent-bright">{t("discount.titleAccent")}</span>
					</h3>
					<p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-white/55 lg:text-sm">
						{t("discount.description")}
					</p>

					<form
						onSubmit={handleSubscribeSubmit}
						noValidate
						className="mx-auto mt-8 flex max-w-lg flex-col gap-4 sm:flex-row sm:items-end sm:gap-6"
					>
						<div className="relative flex-1 border-b border-accent/60">
							<EnvelopeIcon className="pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
							<input
								type="email"
								value={subscribeEmail}
								onChange={(event) => {
									setSubscribeEmail(event.target.value)
									setSubscribeError("")
									setSubscribed(false)
								}}
								placeholder={t("discount.emailPlaceholder")}
								aria-label={t("discount.emailPlaceholder")}
								className="w-full bg-transparent py-3 pl-7 text-sm text-white placeholder:text-white/40 focus:outline-none"
							/>
						</div>
						<Button type="submit" size="sm" className="px-8">
							{t("discount.submit")}
						</Button>
					</form>

					{subscribeError && (
						<p className="mt-3 text-[11px] text-red-400">{t(subscribeError)}</p>
					)}
					{subscribed && (
						<p className="mt-3 text-xs text-accent-bright">{t("discount.success")}</p>
					)}
				</div>
			</div>
		</section>
	)
}
