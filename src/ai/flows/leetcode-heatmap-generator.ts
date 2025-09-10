'use server';

/**
 * @fileOverview LeetCode heatmap generator flow.
 *
 * - leetcodeHeatmapGenerator - Generates a LeetCode heatmap SVG based on a LeetCode username.
 * - LeetcodeHeatmapGeneratorInput - The input type for the leetcodeHeatmapGenerator function.
 * - LeetcodeHeatmapGeneratorOutput - The return type for the leetcodeHeatmapGenerator function.
 */

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
    try {
      // ?yearly=true shows the full year
      const response = await fetch(
        `https://leetcard.jacoblin.cool/${input.leetcodeUsername}?theme=dark&ext=heatmap&yearly=true`
      );
      if (!response.ok) {
        console.error(
          `Failed to fetch LeetCode heatmap for user: ${input.leetcodeUsername}. Status: ${response.status}`
        );
        return { heatmapSvg: `<svg width="828" height="128"><text x="10" y="20" fill="hsl(var(--foreground))">Could not load LeetCode chart.</text></svg>` };
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
        rect[fill="#111111"], rect[fill="#222222"] {
          fill: hsl(var(--muted) / 0.5) !important;
        }
      </style>`;
      return { heatmapSvg: svgText.replace('</svg>', `${style}</svg>`) };
    } catch (error) {
      console.error(
        `Error fetching LeetCode heatmap for user: ${input.leetcodeUsername}`,
        error
      );
      return { heatmapSvg: `<svg width="828" height="128"><text x="10" y="20" fill="hsl(var(--foreground))">Could not load LeetCode chart.</text></svg>` };
    }
}
