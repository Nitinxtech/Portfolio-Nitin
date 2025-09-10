import { personalData } from '@/lib/data';
import Section from '@/components/shared/section';
import { SocialIcons } from '@/components/shared/social-icons';

export default function Hero() {
  return (
    <Section id="hero" className="text-center">
      <div className="space-y-4">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {personalData.name}
        </h1>
        <p className="text-xl text-primary md:text-2xl">{personalData.title}</p>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          {personalData.summary}
        </p>
      </div>
      <div className="mt-8 flex justify-center">
        <SocialIcons />
      </div>
    </Section>
  );
}
