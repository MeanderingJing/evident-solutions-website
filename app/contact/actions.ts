'use server';

import type { ContactFormData } from '@/components/ContactForm/ContactForm';

/**
 * Server Action to handle contact form submission.
 * This function runs on the server and can be safely called from Client Components.
 * 
 * Currently logs submission data to console. In production, this should:
 * - Validate data server-side
 * - Save to database
 * - Send email notification
 * - Handle errors appropriately
 * 
 * @param {ContactFormData} data - The validated form data from the contact form
 * @param {string} data.name - The submitter's name
 * @param {string} data.email - The submitter's email address
 * @param {string} [data.company] - The submitter's company (optional)
 * @param {string} data.message - The message content
 * @returns {Promise<void>} A promise that resolves when submission is processed
 * @throws {Error} Throws an error if submission fails
 * 
 * @example
 * ```tsx
 * // In a Client Component
 * import { submitContactForm } from './actions';
 * 
 * await submitContactForm({
 *   name: 'John Doe',
 *   email: 'john@example.com',
 *   company: 'Acme Corp',
 *   message: 'I need help with test automation.'
 * });
 * ```
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

