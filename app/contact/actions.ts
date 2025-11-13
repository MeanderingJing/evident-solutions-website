'use server';

import type { ContactFormData } from '@/components/ContactForm/ContactForm';

/**
 * Server Action to handle contact form submission
 * This runs on the server and can be called from Client Components
 * 
 * @param {ContactFormData} data - The form data
 * @returns {Promise<void>}
 */
export async function submitContactForm(data: ContactFormData): Promise<void> {
  // TODO: Replace with actual API call or database insertion
  // For now, we'll just log to console (server-side)
  console.log('Contact form submission received:', {
    name: data.name,
    email: data.email,
    company: data.company || 'N/A',
    message: data.message,
    timestamp: new Date().toISOString(),
  });

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // In production, you would:
  // 1. Validate the data server-side
  // 2. Save to database
  // 3. Send email notification
  // 4. Return success/error response

  // For now, always succeed
  // In the future, you can add error handling:
  // if (someError) {
  //   throw new Error('Failed to submit form. Please try again.');
  // }
}

