'use server';

/**
 * @fileOverview Profile summary generator AI agent.
 *
 * - generateProfileSummary - A function that generates a profile summary.
 * - ProfileSummaryInput - The input type for the generateProfileSummary function.
 * - ProfileSummaryOutput - The return type for the generateProfileSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProfileSummaryInputSchema = z.object({
  resumeDetails: z
    .string()
    .describe('The details extracted from the resume to generate a profile summary.'),
});
export type ProfileSummaryInput = z.infer<typeof ProfileSummaryInputSchema>;

const ProfileSummaryOutputSchema = z.object({
  profileSummary: z.string().describe('A concise and professional profile summary.'),
});
export type ProfileSummaryOutput = z.infer<typeof ProfileSummaryOutputSchema>;

export async function generateProfileSummary(input: ProfileSummaryInput): Promise<ProfileSummaryOutput> {
  return generateProfileSummaryFlow(input);
}

const profileSummaryPrompt = ai.definePrompt({
  name: 'profileSummaryPrompt',
  input: {schema: ProfileSummaryInputSchema},
  output: {schema: ProfileSummaryOutputSchema},
  prompt: `You are an expert resume writer. Generate a professional profile summary based on the following resume details:

{{{resumeDetails}}}`, safetySettings: [
    {
      category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
      threshold: 'BLOCK_ONLY_HIGH',
    },
    {
      category: 'HARM_CATEGORY_HATE_SPEECH',
      threshold: 'BLOCK_ONLY_HIGH',
    },
  ],
});

const generateProfileSummaryFlow = ai.defineFlow(
  {
    name: 'generateProfileSummaryFlow',
    inputSchema: ProfileSummaryInputSchema,
    outputSchema: ProfileSummaryOutputSchema,
  },
  async input => {
    const {output} = await profileSummaryPrompt(input);
    return output!;
  }
);
