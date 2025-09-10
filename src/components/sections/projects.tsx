import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/lib/data';
import Section from '@/components/shared/section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Projects() {
  const projectImages = PlaceHolderImages.reduce((acc, img) => {
    acc[img.id] = img;
    return acc;
  }, {} as Record<string, typeof PlaceHolderImages[0]>);

  return (
    <Section id="projects" className="bg-muted/50">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          {projectsData.title}
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.projects.map((project) => {
          const placeholder = projectImages[project.imagePlaceholderId];
          return (
            <Card key={project.id} className="flex flex-col">
              <CardHeader>
                {placeholder && (
                  <div className="aspect-video overflow-hidden rounded-lg border">
                    <Image
                      src={placeholder.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      data-ai-hint={placeholder.imageHint}
                    />
                  </div>
                )}
                <CardTitle className="mt-4 font-headline text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-code">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github />
                    GitHub
                  </Link>
                </Button>
                <Button variant="default" size="sm" asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink />
                    Live Demo
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
