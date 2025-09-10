import { aboutData } from '@/lib/data';
import Section from '@/components/shared/section';

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
        <div className="relative h-96 w-full rounded-2xl bg-muted p-6">
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-primary"></div>
          <div className="relative h-full w-full rounded-2xl bg-background shadow-lg">
            <div className="flex h-full items-center justify-center">
              <p className="font-code text-muted-foreground">// About me section</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
