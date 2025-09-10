import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto max-w-7xl px-4">{children}</div>
    </section>
  );
}
