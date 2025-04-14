import { sanityClient } from '@/lib/sanity.client'
import {
  aboutQuery,
  contactQuery,
  footerQuery,
  navbarQuery,
} from '@/lib/sanity.queries'

import Navbar from '@/components/navbarClient'
import Hero from '@/components/hero'
import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Services from '@/components/services'
import Testimonials from '@/components/testimonials'

export default async function Home() {
  const navbar = await sanityClient.fetch(navbarQuery)
  const aboutList = await sanityClient.fetch(aboutQuery)
  const contact = await sanityClient.fetch(contactQuery)
  const footer = await sanityClient.fetch(footerQuery)

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        brand={navbar.brand}
        quoteButtonText={navbar.quoteButtonText}
        links={navbar.links}
      />
      <Hero />
      <About aboutList={aboutList} />
      <Services />
      <Testimonials />
      <Contact contact={contact}/>
      <Footer footer={footer}/>
    </div>
  )
}
