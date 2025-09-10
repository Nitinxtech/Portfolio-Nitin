import Link from 'next/link';
import { personalData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type SocialIconsProps = {
  className?: string;
};

export function SocialIcons({ className }: SocialIconsProps) {
  return (
    <div className={cn('flex gap-2', className)}>
      {personalData.socials.map((social) => (
        <Button key={social.name} variant="outline" size="icon" asChild>
          <Link href={social.url} target="_blank" rel="noopener noreferrer">
            <social.icon className="h-5 w-5" />
            <span className="sr-only">{social.name}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
}
