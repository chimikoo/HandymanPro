import { sanityClient } from '@/lib/sanity.client'
import { navbarQuery } from '@/lib/sanity.queries'
import NavbarClient from './navbarClient'

export default async function Navbar() {
  const data = await sanityClient.fetch(navbarQuery)

  return (
    <NavbarClient
      brand={data.brand}
      quoteButtonText={data.quoteButtonText}
      links={data.links}
    />
  )
}
