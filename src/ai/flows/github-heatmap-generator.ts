'use server';

/**
 * @fileOverview GitHub heatmap generator flow.
 *
 * - githubHeatmapGenerator - Generates a GitHub heatmap SVG based on a GitHub username.
 * - GithubHeatmapGeneratorInput - The input type for the githubHeatmapGenerator function.
 * - GithubHeatmapGeneratorOutput - The return type for the githubHeatmapGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GithubHeatmapGeneratorInputSchema = z.object({
  githubUsername: z.string().describe('The GitHub username.'),
});
export type GithubHeatmapGeneratorInput = z.infer<
  typeof GithubHeatmapGeneratorInputSchema
>;

const GithubHeatmapGeneratorOutputSchema = z.object({
  heatmapSvg: z.string().describe('The SVG code for the GitHub heatmap.'),
});
export type GithubHeatmapGeneratorOutput = z.infer<
  typeof GithubHeatmapGeneratorOutputSchema
>;

export async function githubHeatmapGenerator(
  input: GithubHeatmapGeneratorInput
): Promise<GithubHeatmapGeneratorOutput> {
  return githubHeatmapGeneratorFlow(input);
}

const getGithubHeatmap = ai.defineTool(
  {
    name: 'getGithubHeatmap',
    description: 'Retrieves the GitHub contribution heatmap SVG for a given username.',
    inputSchema: z.object({
      githubUsername: z
        .string()
        .describe('The GitHub username to fetch the heatmap for.'),
    }),
    outputSchema: z.string(),
  },
  async ({githubUsername}) => {
    try {
      // The API uses a color name for the theme. `a1c93a` is a greenish color. Let's use a purplish color to match the new theme.
      const response = await fetch(`https://ghchart.rshah.org/8e44ad/${githubUsername}`);
      if (!response.ok) {
        console.error(`Failed to fetch GitHub heatmap for user: ${githubUsername}. Status: ${response.status}`);
        return `<svg width="828" height="128"><text x="10" y="20" fill="hsl(var(--foreground))">Could not load GitHub chart.</text></svg>`;
      }
      const svgText = await response.text();
       const style = `<style>
        svg {
          background-color: transparent !important;
        }
        text {
          fill: hsl(var(--foreground)) !important;
        }
      </style>`;
      return svgText.replace('</svg>', `${style}</svg>`);
    } catch (error) {
      console.error(`Error fetching GitHub heatmap for user: ${githubUsername}`, error);
      return `<svg width="828" height="128"><text x="10" y="20" fill="hsl(var(--foreground))">Could not load GitHub chart.</text></svg>`;
    }
  }
);


const prompt = ai.definePrompt({
  name: 'githubHeatmapPrompt',
  input: {schema: GithubHeatmapGeneratorInputSchema},
  output: {schema: GithubHeatmapGeneratorOutputSchema},
  tools: [getGithubHeatmap],
  prompt: `You are an expert at using tools. Your task is to generate a GitHub contribution heatmap SVG for the given username: {{{githubUsername}}}.
  
  Use the getGithubHeatmap tool to retrieve the heatmap SVG. Do not attempt to create the SVG yourself.
  Return the exact SVG code provided by the tool in the heatmapSvg field.`,
});

const githubHeatmapGeneratorFlow = ai.defineFlow(
  {
    name: 'githubHeatmapGeneratorFlow',
    inputSchema: GithubHeatmapGeneratorInputSchema,
    outputSchema: GithubHeatmapGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
