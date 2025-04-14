import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

type ContactProps = {
  contact: {
    heading: string
    subtext: string
    phoneLabel: string
    phoneNumber: string
    emailLabel: string
    email: string
    addressLabel: string
    address: string
    mapUrl?: string
    formLabels: {
      name: string
      email: string
      phone: string
      message: string
      submit: string
    }
  }
}

export default function Contact({ contact }: ContactProps) {
  if (!contact) return null

  return (
    <section id="contact" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
              {contact.heading}
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {contact.subtext}
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 mt-12">
          <div className="flex flex-col space-y-6">
            {[{
              icon: <Phone className="h-6 w-6 text-blue-900" />,
              label: contact.phoneLabel,
              value: contact.phoneNumber,
            }, {
              icon: <Mail className="h-6 w-6 text-blue-900" />,
              label: contact.emailLabel,
              value: contact.email,
            }, {
              icon: <MapPin className="h-6 w-6 text-blue-900" />,
              label: contact.addressLabel,
              value: contact.address,
            }].map((item, index) => (
              <div className="flex items-center space-x-4" key={index}>
                <div className="bg-blue-100 p-3 rounded-full">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-medium text-blue-900">{item.label}</h3>
                  <p className="text-gray-500">{item.value}</p>
                </div>
              </div>
            ))}

            {contact.mapUrl && (
              <div className="mt-6">
                <iframe
                  src={contact.mapUrl}
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">{contact.formLabels.name}</Label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{contact.formLabels.email}</Label>
                  <Input id="email" name="email" type="email" placeholder="Your email" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{contact.formLabels.phone}</Label>
                <Input id="phone" name="phone" placeholder="Your phone number" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{contact.formLabels.message}</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Describe your project or inquiry"
                  required
                  className="min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                {contact.formLabels.submit}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
