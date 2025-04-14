import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity.image'

type AboutProps = {
  aboutList: {
    heading: string
    intro: string
    description: string
    benefits: string[]
    image?: any
  }[]
}

export default function About({ aboutList }: AboutProps) {
  if (!aboutList || aboutList.length === 0) return null

  return (
    <section id="about" className="w-full py-12 md:py-24 space-y-20">
      {aboutList.map((about, index) => {
        const isEven = index % 2 === 0

        return (
          <div
            key={index}
            className={`container px-4 md:px-6 flex flex-col lg:flex-row items-center gap-10 ${
              isEven ? '' : 'lg:flex-row-reverse'
            }`}
          >
            <div className="w-full lg:w-1/2">
              {about.image && (
                <Image
                  src={urlForImage(about.image).width(600).height(600).url()}
                  alt={about.heading}
                  width={600}
                  height={600}
                  className="rounded-lg object-cover w-full h-auto"
                />
              )}
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 text-center lg:text-left">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                  {about.heading}
                </h2>
                <p className="text-gray-500 md:text-xl">{about.intro}</p>
                <p className="text-gray-500 md:text-xl mt-4">{about.description}</p>
              </div>
              <ul className="grid gap-2 py-4">
                {about.benefits?.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      })}
    </section>
  )
}
