import { aboutData } from '@/lib/data';
import Section from '@/components/shared/section';

export default function About() {
  return (
    <Section id="about" className="bg-muted/50">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          {aboutData.title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">{aboutData.description}</p>
      </div>
    </Section>
  );
}
