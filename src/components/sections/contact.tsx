import { contactData } from '@/lib/data';
import Section from '@/components/shared/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Contact() {
  return (
    <Section id="contact" className="bg-secondary">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
          {contactData.title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {contactData.description}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {contactData.actions.map((action) => (
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
      </div>
    </Section>
  );
}
