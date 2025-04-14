// app/components/testimonials.tsx
import { sanityClient } from "@/lib/sanity.client";
import {
  testimonialSectionQuery,
  testimonialsQuery,
} from "@/lib/sanity.queries";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

export default async function Testimonials() {
  const [section, testimonials] = await Promise.all([
    sanityClient.fetch(testimonialSectionQuery),
    sanityClient.fetch(testimonialsQuery),
  ]);

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 bg-blue-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
              {section?.heading || "What Our Clients Say"}
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {section?.subtext ||
                "Don't just take our word for it. Here's what our satisfied customers have to say about our services."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {testimonials.map((testimonial: any) => (
            <Card
              key={testimonial._id}
              className="border-none shadow-md flex flex-col justify-between h-full"
            >
              <CardContent className="pt-6 flex-1">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-orange-500 text-orange-500"
                    />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star
                      key={i + testimonial.rating}
                      className="h-5 w-5 text-gray-300"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter className="pt-0 mt-auto border-blue-100">
                <div>
                  <p className="font-semibold text-blue-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
