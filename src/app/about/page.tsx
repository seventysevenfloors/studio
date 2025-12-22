import Image from 'next/image';
import { Eye, Handshake, Target, Users } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-history');
const teamMembers = [
  {
    name: 'John Doe',
    title: 'Founder & CEO',
    imageId: 'team-member-1',
  },
  {
    name: 'Jane Smith',
    title: 'Head of Operations',
    imageId: 'team-member-2',
  },
  {
    name: 'Mike Johnson',
    title: 'Lead Architect',
    imageId: 'team-member-3',
  },
];
const values = [
    {
      icon: <Handshake className="h-8 w-8 text-accent" />,
      title: 'Integrity',
      description: 'We uphold the highest standards of integrity in all of our actions.'
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: 'Quality',
      description: 'We provide outstanding craftsmanship and unsurpassed service that, together, deliver premium value to our clients.'
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: 'Commitment',
      description: 'We are committed to our clients, our team members, our community, and to building a better future.'
    },
    {
      icon: <Eye className="h-8 w-8 text-accent" />,
      title: 'Vision',
      description: 'We embrace innovation and are always looking for new and better ways to serve our clients.'
    },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 md:py-28 text-center animate-fade-in-down">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">About seventysevenfloors</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/80" style={{ animationDelay: '0.2s' }}>
            Founded on the principles of quality, integrity, and innovation, we have been a trusted partner in construction for over two decades.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-80 md:h-full w-full rounded-lg overflow-hidden shadow-lg animate-slide-in-from-left">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
            <div className="animate-slide-in-from-right">
              <h2 className="font-headline text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4" style={{ animationDelay: '0.2s' }}>
                seventysevenfloors was founded with a simple yet powerful mission: to build structures that are not only aesthetically pleasing but also durable and functional. Over the years, we have grown from a small local firm into a leading construction company, renowned for our commitment to excellence and client satisfaction.
              </p>
              <p className="text-muted-foreground" style={{ animationDelay: '0.4s' }}>
                Our journey has been marked by a relentless pursuit of innovation, adopting the latest technologies and sustainable practices to deliver projects that stand the test of time. We believe that a successful project is born from a strong partnership with our clients, built on transparency, communication, and mutual respect.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg mb-12" style={{ animationDelay: '0.2s' }}>
              The principles that guide our work and define our company culture.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
                <div key={value.title} className="text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
                    <div className="flex justify-center mb-4">{value.icon}</div>
                    <h3 className="font-headline text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg mb-12" style={{ animationDelay: '0.2s' }}>
              The dedicated professionals behind our success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => {
              const image = PlaceHolderImages.find((img) => img.id === member.imageId);
              return (
                <Card key={member.name} className="text-center border-none shadow-none bg-transparent animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
                  <CardContent className="flex flex-col items-center p-0">
                    <Avatar className="h-32 w-32 mb-4 ring-4 ring-primary/10">
                      {image && <AvatarImage src={image.imageUrl} alt={`Portrait of ${member.name}`} data-ai-hint={image.imageHint} />}
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                    <p className="text-accent font-semibold">{member.title}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
