import { aboutData } from '@/lib/data';
import Section from '@/components/shared/section';
import Image from 'next/image';

export default function About() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
            {aboutData.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">{aboutData.description}</p>
        </div>
        <div className="relative mx-auto h-80 w-80 scale-125 transform md:h-96 md:w-96 lg:mx-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/50 to-primary p-1 shadow-lg">
            <div className="h-full w-full rounded-full bg-background p-2">
              <Image
                src="https://picsum.photos/seed/dev-image/400/400"
                alt="Nitin Pandey"
                width={400}
                height={400}
                className="h-full w-full rounded-full object-cover"
                data-ai-hint="developer portrait"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 h-24 w-24 animate-pulse rounded-full bg-primary/20 blur-2xl"></div>
          <div className="absolute -top-4 -left-4 h-24 w-24 animate-pulse rounded-full bg-primary/20 blur-2xl"></div>
        </div>
      </div>
    </Section>
  );
}
