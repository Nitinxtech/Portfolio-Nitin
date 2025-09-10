import { Suspense } from 'react';
import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Activity from '@/components/sections/activity';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Suspense
          fallback={
            <div className="container mx-auto px-4 py-16 md:py-24">
              <Skeleton className="h-40 w-full" />
            </div>
          }
        >
          <Activity />
        </Suspense>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
