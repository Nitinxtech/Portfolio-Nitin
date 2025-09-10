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
  async (input) => {
    // Replace with actual implementation to fetch LeetCode heatmap SVG
    // This is a placeholder implementation
    console.log(
      `Fetching LeetCode heatmap for user: ${input.leetcodeUsername}`
    );

    // Simulate fetching the heatmap SVG.  A real implementation would
    // likely use a service or API to scrape the LeetCode profile.
    const dummyHeatmapSvg = `<svg width="828" height="128" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="828" height="128" fill="#24292f" rx="6" ry="6"></rect>
    <g transform="translate(10, 20)">
      <g style="font-family: 'Inter', sans-serif; font-size: 10px; fill: #e5d8c0;">
        <text x="0" y="-10">Mon</text>
        <text x="0" y="24">Wed</text>
        <text x="0" y="58">Fri</text>
      </g>
      <g transform="translate(40, 0)">
        <rect x="0" y="0" width="10" height="10" rx="2" ry="2" fill="#e5d8c0" data-level="4"></rect>
        <rect x="14" y="0" width="10" height="10" rx="2" ry="2" fill="#b3a184" data-level="3"></rect>
        <rect x="28" y="0" width="10" height="10" rx="2" ry="2" fill="#4a4a4a" data-level="1"></rect>
        <rect x="42" y="0" width="10" height="10" rx="2" ry="2" fill="#b3a184" data-level="3"></rect>
        <rect x="56" y="0" width="10" height="10" rx="2" ry="2" fill="#4a4a4a" data-level="1"></rect>
        <rect x="70" y="0" width="10" height="10" rx="2" ry="2" fill="#b3a184" data-level="3"></rect>
        
        <rect x="0" y="14" width="10" height="10" rx="2" ry="2" fill="#4a4a4a" data-level="1"></rect>
        <rect x="14" y="14" width="10" height="10" rx="2" ry="2" fill="#e5d8c0" data-level="4"></rect>
        
        <rect x="0" y="28" width="10" height="10" rx="2" ry="2" fill="#e5d8c0" data-level="4"></rect>
        
        <rect x="0" y="42" width="10" height="10" rx="2" ry="2" fill="#4a4a4a" data-level="1"></rect>
        
        <rect x="0" y="56" width="10" height="10" rx="2" ry="2" fill="#b3a184" data-level="3"></rect>
        
        <rect x="0" y="70" width="10" height="10" rx="2" ry="2" fill="#4a4a4a" data-level="1"></rect>
        
        <rect x="0" y="84" width="10" height="10" rx="2" ry="2" fill="#e5d8c0" data-level="4"></rect>
        
        <rect x="14" y="84" width="10" height="10" rx="2" ry="2" fill="#e5d8c0" data-level="4"></rect>
      </g>
    </g>
  </svg>`;
    return dummyHeatmapSvg;
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
