'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '../Button/Button';

/**
 * Contact form schema using Zod
 */
const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').min(2, 'Name must be at least 2 characters'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(1, 'Message is required').min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Props for the ContactForm component
 */
export interface ContactFormProps {
  /** Optional callback function when form is submitted successfully */
  onSubmit?: (data: ContactFormData) => Promise<void> | void;
}

/**
 * Contact Form component with validation using React Hook Form and Zod.
 * Handles form submission, validation, loading, and success/error states.
 * 
 * @component
 * @param {ContactFormProps} props - The component props
 * @returns {JSX.Element} A contact form with validation
 * 
 * @example
 * ```tsx
 * <ContactForm 
 *   onSubmit={async (data) => {
 *     await submitContactForm(data);
 *   }}
 * />
 * ```
 */
export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onFormSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        // Default behavior: log to console
        console.log('Form submitted:', data);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : 'An error occurred. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6" noValidate>
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
          Name <span className="text-error-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          required
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            errors.name ? 'border-error-500' : 'border-neutral-300'
          }`}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-error-500" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
          Email <span className="text-error-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          required
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            errors.email ? 'border-error-500' : 'border-neutral-300'
          }`}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-error-500" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Company Field (Optional) */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
          Company
        </label>
        <input
          id="company"
          type="text"
          {...register('company')}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            errors.company ? 'border-error-500' : 'border-neutral-300'
          }`}
          aria-invalid={errors.company ? 'true' : 'false'}
          aria-describedby={errors.company ? 'company-error' : undefined}
        />
        {errors.company && (
          <p id="company-error" className="mt-1 text-sm text-error-500" role="alert">
            {errors.company.message}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
          Message <span className="text-error-500">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          {...register('message')}
          required
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-vertical ${
            errors.message ? 'border-error-500' : 'border-neutral-300'
          }`}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-error-500" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-success-50 border border-success-500 rounded-lg" role="alert">
          <p className="text-sm font-medium text-success-700">
            Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
          </p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="p-4 bg-error-50 border border-error-500 rounded-lg" role="alert">
          <p className="text-sm font-medium text-error-700">
            {errorMessage || 'An error occurred while sending your message. Please try again.'}
          </p>
        </div>
      )}

      {/* Submit Button */}
      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
}

