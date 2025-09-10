import { leetcodeHeatmapGenerator } from '@/ai/flows/leetcode-heatmap-generator';
import { githubHeatmapGenerator } from '@/ai/flows/github-heatmap-generator';
import Section from '@/components/shared/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { personalData } from '@/lib/data';

export default async function Activity() {
  const leetcodePromise = leetcodeHeatmapGenerator({
    leetcodeUsername: personalData.socials.find(s => s.name === 'LeetCode')?.url.split('/').filter(Boolean).pop() || '',
  });

  const githubUsername = personalData.socials.find(s => s.name === 'GitHub')?.url.split('/').filter(Boolean).pop() || '';
  const githubPromise = githubHeatmapGenerator({
    githubUsername,
  });

  const [{ heatmapSvg: leetcodeSvg }, { heatmapSvg: githubSvg }] = await Promise.all([leetcodePromise, githubPromise]);

  return (
    <Section id="activity">
      <div className="text-center">
        <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
          Coding Activity
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          My contributions on LeetCode and GitHub over the last year.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8">
        <Card className="bg-secondary/50">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">GitHub Contributions</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="overflow-x-auto rounded-lg border bg-card p-4"
              dangerouslySetInnerHTML={{ __html: githubSvg }}
            />
          </CardContent>
        </Card>
        <Card className="bg-secondary/50">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">LeetCode Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="overflow-x-auto rounded-lg border bg-card p-4"
              dangerouslySetInnerHTML={{ __html: leetcodeSvg }}
            />
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
