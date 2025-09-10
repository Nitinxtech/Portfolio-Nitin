'use server';

/**
 * @fileOverview LeetCode heatmap generator flow.
 *
 * - leetcodeHeatmapGenerator - Generates a LeetCode heatmap SVG based on a LeetCode username.
 * - LeetcodeHeatmapGeneratorInput - The input type for the leetcodeHeatmapGenerator function.
 * - LeetcodeHeatmapGeneratorOutput - The return type for the leetcodeHeatmapGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LeetcodeHeatmapGeneratorInputSchema = z.object({
  leetcodeUsername: z.string().describe('The LeetCode username.'),
});
export type LeetcodeHeatmapGeneratorInput = z.infer<
  typeof LeetcodeHeatmapGeneratorInputSchema
>;

const LeetcodeHeatmapGeneratorOutputSchema = z.object({
  heatmapSvg: z.string().describe('The SVG code for the LeetCode heatmap.'),
});
export type LeetcodeHeatmapGeneratorOutput = z.infer<
  typeof LeetcodeHeatmapGeneratorOutputSchema
>;

export async function leetcodeHeatmapGenerator(
  input: LeetcodeHeatmapGeneratorInput
): Promise<LeetcodeHeatmapGeneratorOutput> {
  return leetcodeHeatmapGeneratorFlow(input);
}

const getLeetcodeHeatmap = ai.defineTool({
  name: 'getLeetcodeHeatmap',
  description: 'Retrieves the LeetCode contribution heatmap SVG for a given username.',
  inputSchema: z.object({
    leetcodeUsername: z
      .string()
      .describe('The LeetCode username to fetch the heatmap for.'),
  }),
  outputSchema: z.string(),
  async (input) => {
    // Replace with actual implementation to fetch LeetCode heatmap SVG
    // This is a placeholder implementation
    console.log(
      `Fetching LeetCode heatmap for user: ${input.leetcodeUsername}`
    );

    // Simulate fetching the heatmap SVG.  A real implementation would
    // likely use a service or API to scrape the LeetCode profile.
    const dummyHeatmapSvg = `<svg width=\