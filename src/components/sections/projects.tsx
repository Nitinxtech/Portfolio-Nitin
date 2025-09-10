import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/lib/data';
import Section from '@/components/shared/section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Projects() {
  const projectImages = PlaceHolderImages.reduce((acc, img) => {
    acc[img.id] = img;
    return acc;
  }, {} as Record<string, typeof PlaceHolderImages[0]>);

  return (
    <Section id="projects" className="bg-secondary">
      <div className="text-center">
        <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
          {projectsData.title}
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.projects.map((project) => {
          const placeholder = projectImages[project.imagePlaceholderId];
          return (
            <Card key={project.id} className="flex flex-col overflow-hidden transition-all hover:scale-105 hover:shadow-xl">
              <CardHeader>
                {placeholder && (
                  <div className="aspect-video overflow-hidden rounded-lg border">
                    <Image
                      src={placeholder.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                      data-ai-hint={placeholder.imageHint}
                    />
                  </div>
                )}
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="font-code">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github />
                    GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
