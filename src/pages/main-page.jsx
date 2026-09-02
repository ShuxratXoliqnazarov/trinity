import Header from '../components/layout/header'
import HeroSection from '../components/sections/hero-section'
import PopularSection from '../components/sections/popular-section'
import FleetSection from '../components/sections/fleet-section'
import AboutSection from '../components/sections/about-section'
import ReviewSection from '../components/sections/review-section'
import AdvantagesSection from '../components/sections/advantages-section'
import ContactSection from '../components/sections/contact-section'
import Footer from '../components/layout/footer'


export default function MainPage() {
	return (
		<>
			<Header />
			<HeroSection />
			<PopularSection/>
			<FleetSection/>
			<AboutSection/>
			<ReviewSection/>
			<AdvantagesSection/>
			<ContactSection/>
			<Footer/>
		</>
	)
}
