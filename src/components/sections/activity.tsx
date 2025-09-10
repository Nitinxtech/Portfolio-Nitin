import { leetcodeHeatmapGenerator } from '@/ai/flows/leetcode-heatmap-generator';
import Section from '@/components/shared/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function Activity() {
  const { heatmapSvg } = await leetcodeHeatmapGenerator({
    leetcodeUsername: 'pandey30nitin',
  });

  return (
    <Section id="activity">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          LeetCode Activity
        </h2>
      </div>
      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="font-headline text-xl">Contribution Graph</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className="overflow-x-auto rounded-lg border bg-card p-4"
            dangerouslySetInnerHTML={{ __html: heatmapSvg }}
          />
        </CardContent>
      </Card>
    </Section>
  );
}
