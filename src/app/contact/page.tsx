import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { ContactForm } from '@/components/contact-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const mapImage = PlaceHolderImages.find((img) => img.id === 'contact-map');

const contactDetails = [
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: 'Our Office',
    text: '123 Construction Ave, Builder City, 12345',
  },
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: 'Email Us',
    text: 'contact@apexbuild.com',
    href: 'mailto:contact@apexbuild.com',
  },
  {
    icon: <Phone className="h-8 w-8 text-primary" />,
    title: 'Call Us',
    text: '(123) 456-7890',
    href: 'tel:+1234567890',
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 md:py-28 text-center animate-fade-in-down">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            We're here to answer your questions and start planning your next project.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              {contactDetails.map((detail, i) => (
                <div key={detail.title} className="flex items-start gap-4 animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className="bg-primary/10 p-3 rounded-full">{detail.icon}</div>
                  <div>
                    <h3 className="font-headline text-xl font-bold">{detail.title}</h3>
                    {detail.href ? (
                      <a href={detail.href} className="text-muted-foreground hover:text-primary transition-colors">{detail.text}</a>
                    ) : (
                      <p className="text-muted-foreground">{detail.text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-card">
        <div className="container mx-auto px-4 py-16 md:py-24">
             <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Our Location</h2>
                <p className="text-muted-foreground text-lg mb-8">
                Visit our office or get in touch to discuss your construction needs.
                </p>
            </div>
             {mapImage && (
                <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-lg animate-zoom-in">
                    <Image
                        src={mapImage.imageUrl}
                        alt="Map showing office location"
                        fill
                        className="object-cover"
                        data-ai-hint={mapImage.imageHint}
                    />
                </div>
            )}
        </div>
      </section>
    </>
  );
}
