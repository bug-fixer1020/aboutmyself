import HeroSection from './herosection/page'
import SkilesPage from './skiles/page'
import Works from './works/page'
import WhyChooseUs from './reasontochose/page'
import ContactSection from './contact/page'

export default function Home() {
  return (
    <main className="min-h-screen w-full px-4 py-8 md:px-8 lg:px-12 2xl:px-20 2xl:py-12">
      <section id="herosection">
        <HeroSection />
      </section>
      <section id="skiles">
        <SkilesPage />
      </section>
      <section id="works">
        <Works />
      </section>
      <section id="reasontochose">
        <WhyChooseUs />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  )
}
