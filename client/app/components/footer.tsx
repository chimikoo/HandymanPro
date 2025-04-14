import Link from 'next/link'
import {
  PenToolIcon as Tool,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react'

const iconMap: Record<string, JSX.Element> = {
  Facebook: <Facebook className="h-5 w-5" />,
  Twitter: <Twitter className="h-5 w-5" />,
  Instagram: <Instagram className="h-5 w-5" />,
  Linkedin: <Linkedin className="h-5 w-5" />,
  Youtube: <Youtube className="h-5 w-5" />,
}

type FooterProps = {
  footer: {
    brandName: string
    description: string
    servicesTitle: string
    companyTitle: string
    contactTitle: string
    copyrightName: string
    services: { name: string; href: string }[]
    companyLinks: { name: string; href: string }[]
    contactInfo: string[]
    socialLinks: { platform: string; href: string }[]
  }
}

export default function Footer({ footer }: FooterProps) {
  if (!footer) return null

  return (
    <footer className="w-full bg-blue-900 text-white">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Tool className="h-6 w-6 text-orange-500" />
              <span className="text-xl font-bold">{footer.brandName}</span>
            </div>
            <p className="text-gray-300 text-sm">{footer.description}</p>
            <div className="flex space-x-4">
              {footer.socialLinks?.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-orange-500"
                >
                  {iconMap[social.platform] || null}
                  <span className="sr-only">{social.platform}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{footer.servicesTitle}</h3>
            <ul className="space-y-2">
              {footer.services?.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-orange-500 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{footer.companyTitle}</h3>
            <ul className="space-y-2">
              {footer.companyLinks?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-orange-500 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{footer.contactTitle}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {footer.contactInfo?.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-blue-800 pt-6 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} {footer.copyrightName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
