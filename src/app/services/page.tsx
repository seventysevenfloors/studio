import Image from 'next/image';
import { Check } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { servicesData } from '@/lib/data';

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 md:py-28 text-center animate-fade-in-down">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Expertise</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            Comprehensive construction solutions tailored to your needs.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {servicesData.map((service, index) => {
              const image = PlaceHolderImages.find((img) => img.id === service.imageId);
              const isEven = index % 2 === 0;
              return (
                <Card key={service.id} className="overflow-hidden shadow-lg border-none">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-center`}>
                    <div className={`relative h-64 md:h-96 ${!isEven ? 'lg:order-last' : ''} ${isEven ? 'animate-slide-in-from-left' : 'animate-slide-in-from-right'}`}>
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                    </div>
                    <div className={`p-8 md:p-12 ${!isEven ? 'animate-slide-in-from-left' : 'animate-slide-in-from-right'}`}>
                      <h2 className="font-headline text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <Check className="h-5 w-5 text-accent mr-2 shrink-0" />
                            <span className="font-semibold">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
