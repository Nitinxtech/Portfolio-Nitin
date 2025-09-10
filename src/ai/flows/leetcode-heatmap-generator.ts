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

const getLeetcodeHeatmap = ai.defineTool(
  {
    name: 'getLeetcodeHeatmap',
    description: 'Retrieves the LeetCode contribution heatmap SVG for a given username.',
    inputSchema: z.object({
      leetcodeUsername: z
        .string()
        .describe('The LeetCode username to fetch the heatmap for.'),
    }),
    outputSchema: z.string(),
  },
  async ({leetcodeUsername}) => {
    try {
      const response = await fetch(
        `https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&ext=heatmap`
      );
      if (!response.ok) {
        console.error(
          `Failed to fetch LeetCode heatmap for user: ${leetcodeUsername}. Status: ${response.status}`
        );
        return `<svg width="828" height="128"><text x="10" y="20">Could not load LeetCode chart.</text></svg>`;
      }
      const svgText = await response.text();
      // Inject styles to make it look better in dark mode
      const style = `<style>
        svg {
          background-color: transparent !important;
        }
        text {
          fill: hsl(var(--foreground)) !important;
        }
        .wday, .month {
          fill: hsl(var(--muted-foreground)) !important;
        }
      </style>`;
      return svgText.replace('</svg>', `${style}</svg>`);
    } catch (error) {
      console.error(
        `Error fetching LeetCode heatmap for user: ${leetcodeUsername}`,
        error
      );
      return `<svg width="828" height="128"><text x="10" y="20">Could not load LeetCode chart.</text></svg>`;
    }
  }
);

const prompt = ai.definePrompt({
  name: 'leetcodeHeatmapPrompt',
  input: {schema: LeetcodeHeatmapGeneratorInputSchema},
  output: {schema: LeetcodeHeatmapGeneratorOutputSchema},
  tools: [getLeetcodeHeatmap],
  prompt: `You are an expert at using tools. Your task is to generate a LeetCode contribution heatmap SVG for the given username: {{{leetcodeUsername}}}.
  
  Use the getLeetcodeHeatmap tool to retrieve the heatmap SVG. Do not attempt to create the SVG yourself.
  Return the exact SVG code provided by the tool in the heatmapSvg field.`,
});

const leetcodeHeatmapGeneratorFlow = ai.defineFlow(
  {
    name: 'leetcodeHeatmapGeneratorFlow',
    inputSchema: LeetcodeHeatmapGeneratorInputSchema,
    outputSchema: LeetcodeHeatmapGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
