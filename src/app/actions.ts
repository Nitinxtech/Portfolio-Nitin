'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export type ContactFormState = {
  message: string;
  status: 'success' | 'error' | 'idle';
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'There was an error with your submission.',
    };
  }

  try {
    // Here you would typically send an email, save to a database, etc.
    // For this example, we'll just log it to the console.
    console.log('New contact form submission:');
    console.log('Name:', validatedFields.data.name);
    console.log('Email:', validatedFields.data.email);
    console.log('Message:', validatedFields.data.message);

    return {
      status: 'success',
      message: 'Thank you for your message! I will get back to you shortly.',
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      status: 'error',
      message: 'Something went wrong. Please try again later.',
    };
  }
}
