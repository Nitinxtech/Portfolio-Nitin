import { contactData } from '@/lib/data';
import Section from '@/components/shared/section';

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
      </div>
    </Section>
  );
}
