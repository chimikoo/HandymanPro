import { sanityClient } from "@/lib/sanity.client";
import { heroQuery } from "@/lib/sanity.queries";
import { urlForImage } from "@/lib/sanity.image";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default async function Hero() {
  const hero = await sanityClient.fetch(heroQuery);

  if (!hero) return null;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                {hero.heading}
              </h1>
              <p className="max-w-[600px] text-gray-200 md:text-xl">
                {hero.subtext}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-orange-500 hover:bg-orange-600">
                <a href={hero.button.href}>
                  {hero.button.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          {hero.image && (
            <div className="mx-auto lg:ml-auto">
              <Image
                src={urlForImage(hero.image).width(550).height(550).url()}
                alt="Hero"
                width={550}
                height={550}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
