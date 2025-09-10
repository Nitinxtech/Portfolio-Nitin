import Image from 'next/image';
import Link from 'next/link';
import { aboutData, contactData, personalData } from '@/lib/data';
import Section from '@/components/shared/section';
import { SocialIcons } from '@/components/shared/social-icons';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const githubUsername = personalData.socials.find(s => s.name === 'GitHub')?.url.split('/').filter(Boolean).pop() || '';
  return (
    <Section id="hero" className="py-24 md:py-32 lg:py-40">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
        <div className="relative col-span-1 mx-auto h-60 w-60 md:h-80 md:w-80 lg:mx-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/50 to-primary p-1 shadow-lg">
            <div className="h-full w-full rounded-full bg-background p-2">
              <Image
                src={`https://github.com/${githubUsername}.png`}
                alt="Nitin Pandey"
                width={400}
                height={400}
                className="h-full w-full rounded-full object-cover"
                data-ai-hint="developer portrait"
                priority
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 h-20 w-20 animate-pulse rounded-full bg-primary/20 blur-2xl"></div>
          <div className="absolute -top-4 -left-4 h-20 w-20 animate-pulse rounded-full bg-primary/20 blur-2xl"></div>
        </div>
        <div className="col-span-2 space-y-6 text-center md:text-left">
          <p className="font-headline text-lg uppercase tracking-widest text-primary">
            {personalData.title}
          </p>
          <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            {personalData.name}
          </h1>

          <p className="text-xl text-muted-foreground md:text-2xl">
            {aboutData.description}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
            {contactData.actions.map(action => (
              <Button key={action.label} size="lg" asChild>
                <Link
                  href={action.href}
                  download={action.download}
                  target={action.download ? undefined : '_blank'}
                  rel={action.download ? undefined : 'noopener noreferrer'}
                >
                  <action.icon className="mr-2 h-5 w-5" />
                  {action.label}
                </Link>
              </Button>
            ))}
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <SocialIcons />
          </div>
        </div>
      </div>
    </Section>
  );
}
