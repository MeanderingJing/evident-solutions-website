/**
 * Contact Form Component Tests
 * 
 * Test-Driven Development approach for the Contact Form
 * Tests verify form rendering, validation, submission, and states
 */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '../ContactForm';

describe('ContactForm Component', () => {
  describe('Form Rendering', () => {
    it('should render form with all required fields', () => {
      render(<ContactForm />);
      
      expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/company/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    });

    it('should render submit button', () => {
      render(<ContactForm />);
      
      const submitButton = screen.getByRole('button', { name: /submit|send/i });
      expect(submitButton).toBeInTheDocument();
    });

    it('should have proper form structure', () => {
      const { container } = render(<ContactForm />);
      
      const form = container.querySelector('form');
      expect(form).toBeInTheDocument();
    });
  });

  describe('Form Validation', () => {
    it('should show validation error for empty required fields', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);
      
      const submitButton = screen.getByRole('button', { name: /submit|send/i });
      await user.click(submitButton);
      
      // Wait for validation errors to appear
      await waitFor(() => {
        const nameError = screen.queryByText(/name is required/i);
        const emailError = screen.queryByText(/email is required/i);
        const messageError = screen.queryByText(/message is required/i);
        
        expect(nameError !== null || emailError !== null || messageError !== null).toBe(true);
      });
    });

    it('should validate email format', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);
      
      const emailInput = screen.getByLabelText(/email/i);
      await user.type(emailInput, 'invalid-email');
      
      const submitButton = screen.getByRole('button', { name: /submit|send/i });
      await user.click(submitButton);
      
      await waitFor(() => {
        const emailError = screen.queryByText(/invalid email|valid email/i);
        expect(emailError).toBeInTheDocument();
      });
    });

    it('should accept valid email format', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);
      
      const emailInput = screen.getByLabelText(/email/i);
      await user.type(emailInput, 'test@example.com');
      
      // Should not show error for valid email
      await waitFor(() => {
        const emailError = screen.queryByText(/invalid email/i);
        expect(emailError).not.toBeInTheDocument();
      }, { timeout: 1000 });
    });

    it('should allow company field to be optional', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);
      
      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const messageInput = screen.getByLabelText(/message/i);
      
      await user.type(nameInput, 'John Doe');
      await user.type(emailInput, 'john@example.com');
      await user.type(messageInput, 'Test message');
      
      // Company field should be optional, so form should be valid
      const submitButton = screen.getByRole('button', { name: /submit|send/i });
      await user.click(submitButton);
      
      // Should not show error about company being required
      await waitFor(() => {
        const companyError = screen.queryByText(/company is required/i);
        expect(companyError).not.toBeInTheDocument();
      });
    });
  });

  describe('Form Submission', () => {
    it('should handle form submission', async () => {
      const user = userEvent.setup();
      const mockOnSubmit = jest.fn();
      
      render(<ContactForm onSubmit={mockOnSubmit} />);
      
      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const messageInput = screen.getByLabelText(/message/i);
      
      await user.type(nameInput, 'John Doe');
      await user.type(emailInput, 'john@example.com');
      await user.type(messageInput, 'Test message');
      
      const submitButton = screen.getByRole('button', { name: /submit|send/i });
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(mockOnSubmit).toHaveBeenCalled();
      });
    });

    it('should pass form data to onSubmit handler', async () => {
      const user = userEvent.setup();
      const mockOnSubmit = jest.fn();
      
      render(<ContactForm onSubmit={mockOnSubmit} />);
      
      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const companyInput = screen.getByLabelText(/company/i);
      const messageInput = screen.getByLabelText(/message/i);
      
      await user.type(nameInput, 'John Doe');
      await user.type(emailInput, 'john@example.com');
      await user.type(companyInput, 'Test Company');
      await user.type(messageInput, 'Test message');
      
      const submitButton = screen.getByRole('button', { name: /submit|send/i });
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(mockOnSubmit).toHaveBeenCalledWith(
          expect.objectContaining({
            name: 'John Doe',
            email: 'john@example.com',
            company: 'Test Company',
            message: 'Test message',
          })
        );
      });
    });
  });

  describe('Success State', () => {
    it('should display success message after successful submission', async () => {
      const user = userEvent.setup();
      const mockOnSubmit = jest.fn().mockResolvedValue({ success: true });
      
      render(<ContactForm onSubmit={mockOnSubmit} />);
      
      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const messageInput = screen.getByLabelText(/message/i);
      
      await user.type(nameInput, 'John Doe');
      await user.type(emailInput, 'john@example.com');
      await user.type(messageInput, 'Test message');
      
      const submitButton = screen.getByRole('button', { name: /submit|send/i });
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(screen.getByText(/success|thank you|message sent/i)).toBeInTheDocument();
      });
    });
  });

  describe('Error State', () => {
    it('should display error message on submission failure', async () => {
      const user = userEvent.setup();
      const mockOnSubmit = jest.fn().mockRejectedValue(new Error('Submission failed'));
      
      render(<ContactForm onSubmit={mockOnSubmit} />);
      
      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const messageInput = screen.getByLabelText(/message/i);
      
      await user.type(nameInput, 'John Doe');
      await user.type(emailInput, 'john@example.com');
      await user.type(messageInput, 'Test message');
      
      const submitButton = screen.getByRole('button', { name: /submit|send/i });
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(screen.getByText(/error|failed|try again/i)).toBeInTheDocument();
      });
    });
  });

  describe('Loading State', () => {
    it('should show loading state during submission', async () => {
      const user = userEvent.setup();
      const mockOnSubmit = jest.fn(() => new Promise(resolve => setTimeout(resolve, 100)));
      
      render(<ContactForm onSubmit={mockOnSubmit} />);
      
      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const messageInput = screen.getByLabelText(/message/i);
      
      await user.type(nameInput, 'John Doe');
      await user.type(emailInput, 'john@example.com');
      await user.type(messageInput, 'Test message');
      
      const submitButton = screen.getByRole('button', { name: /submit|send/i });
      await user.click(submitButton);
      
      // Button should be disabled or show loading state
      expect(submitButton).toBeDisabled();
    });
  });

  describe('Accessibility', () => {
    it('should have proper labels for all form fields', () => {
      render(<ContactForm />);
      
      expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/company/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    });

    it('should have required field indicators', () => {
      render(<ContactForm />);
      
      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const messageInput = screen.getByLabelText(/message/i);
      
      expect(nameInput).toHaveAttribute('required');
      expect(emailInput).toHaveAttribute('required');
      expect(messageInput).toHaveAttribute('required');
    });
  });
});

