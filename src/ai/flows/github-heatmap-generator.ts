'use server';

/**
 * @fileOverview GitHub heatmap generator flow.
 *
 * - githubHeatmapGenerator - Generates a GitHub heatmap SVG based on a GitHub username.
 * - GithubHeatmapGeneratorInput - The input type for the githubHeatmapGenerator function.
 * - GithubHeatmapGeneratorOutput - The return type for the githubHeatmapGenerator function.
 */

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
    try {
      // The API uses a color name for the theme. `a1c93a` is a greenish color. Let's use a purplish color to match the new theme.
      const response = await fetch(`https://ghchart.rshah.org/8e44ad/${input.githubUsername}`);
      if (!response.ok) {
        console.error(`Failed to fetch GitHub heatmap for user: ${input.githubUsername}. Status: ${response.status}`);
        return { heatmapSvg: `<svg width="828" height="128"><text x="10" y="20" fill="hsl(var(--foreground))">Could not load GitHub chart.</text></svg>`};
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
      return { heatmapSvg: svgText.replace('</svg>', `${style}</svg>`)};
    } catch (error) {
      console.error(`Error fetching GitHub heatmap for user: ${input.githubUsername}`, error);
      return { heatmapSvg: `<svg width="828" height="128"><text x="10" y="20" fill="hsl(var(--foreground))">Could not load GitHub chart.</text></svg>`};
    }
}
