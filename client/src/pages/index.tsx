import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import About from '@/components/home/about'
import Certificates from '@/components/home/certificates'
import Experiences from '@/components/home/experiences'
import Hero from '@/components/home/hero'


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experiences />
      <Certificates />
      <Footer />
    </>
  )
}
