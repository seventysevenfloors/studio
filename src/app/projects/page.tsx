import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = PlaceHolderImages.filter(p => p.id.startsWith('project-')).map((p, i) => {
    let category = 'Residential';
    if (i % 3 === 1) category = 'Commercial';
    if (i % 3 === 2) category = 'Industrial';
    return {
        ...p,
        title: `${category} Project #${i + 1}`,
        category,
    };
});

const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 md:py-28 text-center animate-fade-in-down">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Portfolio</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            A testament to our dedication to quality, innovation, and client satisfaction.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
            <Tabs defaultValue="All" className="w-full animate-fade-in-up">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12">
                    {categories.map(category => (
                        <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                    ))}
                </TabsList>
                {categories.map(category => (
                    <TabsContent key={category} value={category}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            { (category === 'All' ? projects : projects.filter(p => p.category === category)).map((project, i) => (
                                <Card key={project.id} className="group overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                                    <CardContent className="p-0">
                                        <div className="relative h-60 w-full overflow-hidden">
                                            <Image
                                                src={project.imageUrl}
                                                alt={project.description}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                data-ai-hint={project.imageHint}
                                            />
                                        </div>
                                        <div className="p-6">
                                            <Badge variant={
                                                project.category === 'Residential' ? 'default' :
                                                project.category === 'Commercial' ? 'secondary' :
                                                'destructive'
                                            } className="mb-2 bg-accent text-accent-foreground">{project.category}</Badge>
                                            <h3 className="font-headline text-xl font-bold mb-2">{project.title}</h3>
                                            <p className="text-muted-foreground text-sm">A showcase of modern design and robust construction techniques.</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
      </section>
    </>
  );
}
