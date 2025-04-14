import { sanityClient } from "@/lib/sanity.client"
import { servicesQuery, servicesSectionQuery } from "@/lib/sanity.queries"
import { iconMap } from "@/lib/iconMap"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function Services() {
  const [services, section] = await Promise.all([
    sanityClient.fetch(servicesQuery),
    sanityClient.fetch(servicesSectionQuery),
  ])

  return (
    <section id="services" className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
            {section.heading}
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {section.subtext}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {services.map((service: any) => (
            <Card key={service._id} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-2">{iconMap[service.icon] ?? null}</div>
                <CardTitle className="text-xl text-blue-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
