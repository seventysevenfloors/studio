import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, HardHat, HomeIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
const projectImages = PlaceHolderImages.filter((img) => img.id.startsWith('project-')).slice(0, 3);

const services = [
  {
    icon: <HomeIcon className="h-10 w-10" />,
    title: 'Residential Construction',
    description: 'From custom homes to renovations, we bring your vision to life with quality craftsmanship.',
    link: '/services',
  },
  {
    icon: <Building2 className="h-10 w-10" />,
    title: 'Commercial Projects',
    description: 'We build functional and inspiring commercial spaces that meet your business needs.',
    link: '/services',
  },
  {
    icon: <HardHat className="h-10 w-10" />,
    title: 'Industrial Solutions',
    description: 'Specializing in large-scale industrial facilities with a focus on safety and efficiency.',
    link: '/services',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-screen w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/50" />
        <div className="relative z-10 flex flex-col items-center px-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 animate-fade-in-down">
            Building Your Vision
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Apex Build delivers exceptional construction services with a commitment to quality, safety, and innovation.
          </p>
          <div className="flex gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button asChild size="lg" className="font-bold">
              <Link href="/projects">Our Projects</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg mb-12">
              We provide a comprehensive range of construction services to meet the diverse needs of our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardHeader className="flex flex-col items-center gap-4">
                  <div className="bg-primary text-primary-foreground p-4 rounded-full group-hover:bg-accent transition-colors duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="link" asChild className="text-accent-foreground font-bold">
                    <Link href={service.link}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="featured-projects" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg mb-12">
              A glimpse into our commitment to excellence and quality craftsmanship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectImages.map((project, i) => (
              <Link href="/projects" key={project.id} className="group block overflow-hidden rounded-lg shadow-lg animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="relative h-64">
                  <Image
                    src={project.imageUrl}
                    alt={project.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="font-headline text-xl font-bold text-white">Project Showcase</h3>
                    <p className="text-white/90 text-sm">View Details</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
            <Button asChild size="lg">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center animate-fade-in">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Future?</h2>
            <p className="max-w-2xl mx-auto text-lg text-primary-foreground/90 mb-8" style={{ animationDelay: '0.2s' }}>
                Let's discuss your project and how we can bring your vision to reality.
            </p>
            <Button asChild size="lg" variant="secondary" style={{ animationDelay: '0.4s' }}>
                <Link href="/contact">Contact Us Today</Link>
            </Button>
        </div>
    </section>
    </div>
  );
}
