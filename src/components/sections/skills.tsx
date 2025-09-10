import { skillsData } from '@/lib/data';
import Section from '@/components/shared/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Skills() {
  return (
    <Section id="skills">
      <div className="text-center">
        <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
          {skillsData.title}
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skillsData.categories.map((category) => (
          <Card key={category.name} className="bg-secondary/50">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="default" className="font-code text-base">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
