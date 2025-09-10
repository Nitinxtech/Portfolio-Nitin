import { personalData } from '@/lib/data';
import Section from '@/components/shared/section';
import { SocialIcons } from '@/components/shared/social-icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <Section id="hero" className="py-24 text-center md:py-32 lg:py-40">
      <div className="space-y-6">
        <p className="font-headline text-lg uppercase tracking-widest text-primary">
          {personalData.title}
        </p>
        <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          {personalData.name}
        </h1>

        <p className="mx-auto max-w-3xl text-xl text-muted-foreground md:text-2xl">
          {personalData.summary}
        </p>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button size="lg" asChild>
          <Link href="#contact">Get In Touch</Link>
        </Button>
        <SocialIcons />
      </div>
    </Section>
  );
}
