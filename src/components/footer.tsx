import { personalData } from '@/lib/data';
import { SocialIcons } from '@/components/shared/social-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {personalData.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
