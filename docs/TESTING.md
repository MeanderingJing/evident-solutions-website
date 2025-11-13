# Testing Guide

This document provides comprehensive information about the testing infrastructure and best practices for this project.

## Testing Stack

- **Jest**: Unit and integration testing framework
- **React Testing Library**: Component testing utilities
- **Playwright**: End-to-end (E2E) testing framework
- **Husky**: Git hooks for pre-commit testing

## Test Structure

```
evident-solutions-website/
├── __tests__/              # Root-level tests
│   └── integration/       # Integration tests
├── app/
│   └── __tests__/         # App router tests
├── components/
│   └── __tests__/         # Component tests
├── lib/
│   └── __tests__/         # Utility function tests
└── e2e/                   # End-to-end tests (Playwright)
```

## Running Tests

### Unit Tests

Run all unit tests:
```bash
npm run test
```

Run tests in watch mode (for development):
```bash
npm run test:watch
```

Run only unit tests:
```bash
npm run test:unit
```

### Integration Tests

Run integration tests:
```bash
npm run test:integration
```

### E2E Tests

Run all E2E tests:
```bash
npm run test:e2e
```

Run E2E tests with UI mode (interactive):
```bash
npm run test:e2e:ui
```

Run E2E tests in headed mode (see browser):
```bash
npm run test:e2e:headed
```

### Coverage

Generate test coverage report:
```bash
npm run test:coverage
```

Coverage reports are generated in the `coverage/` directory. Open `coverage/lcov-report/index.html` in your browser to view the detailed report.

### Run All Tests

Run all tests (unit + E2E):
```bash
npm run test:all
```

## Test Coverage Thresholds

The project has minimum coverage thresholds set:
- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

These thresholds are configured in `jest.config.js`. If coverage falls below these thresholds, the test suite will fail.

## Writing Tests

### Component Tests (TDD Best Practices)

When writing component tests, follow these principles:

1. **Test user behavior, not implementation**
   ```tsx
   // ✅ Good: Testing what the user sees
   expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
   
   // ❌ Bad: Testing implementation details
   expect(component.state.isLoading).toBe(true);
   ```

2. **Use semantic queries**
   ```tsx
   // ✅ Good: Using role-based queries
   screen.getByRole('button')
   screen.getByLabelText('Email')
   screen.getByText('Welcome')
   
   // ❌ Avoid: Using test IDs unless necessary
   screen.getByTestId('submit-button')
   ```

3. **Test accessibility**
   ```tsx
   it('should be keyboard accessible', async () => {
     const user = userEvent.setup();
     await user.tab();
     expect(button).toHaveFocus();
   });
   ```

4. **Test edge cases**
   - Empty states
   - Loading states
   - Error states
   - Disabled states

### Example Component Test

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

describe('Button Component', () => {
  it('should render with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('should call onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### E2E Tests

E2E tests should test complete user flows:

```ts
import { test, expect } from '@playwright/test';

test('user can complete checkout flow', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Add to Cart');
  await page.click('text=Checkout');
  await expect(page).toHaveURL('/checkout');
});
```

## Pre-commit Hooks

Husky is configured to run tests before commits:

1. **Lint-staged**: Runs ESLint on staged files
2. **Jest**: Runs tests related to staged files

To bypass hooks (not recommended):
```bash
git commit --no-verify
```

## Test Configuration

### Jest Configuration

Jest is configured in `jest.config.js`:
- Uses Next.js Jest preset
- Configured for TypeScript
- Path aliases (`@/*`) are resolved
- Coverage thresholds are set
- Test environment is jsdom for React components

### Playwright Configuration

Playwright is configured in `playwright.config.ts`:
- Tests run in multiple browsers (Chrome, Firefox, Safari)
- Automatically starts dev server before tests
- Retries failed tests on CI
- Generates HTML reports

## Debugging Tests

### Jest

Run a specific test file:
```bash
npm test -- Button.test.tsx
```

Run tests matching a pattern:
```bash
npm test -- --testNamePattern="should render"
```

Debug tests in VS Code:
1. Set breakpoints in your test files
2. Use the "Jest: Debug" command in VS Code

### Playwright

Debug a specific test:
```bash
npm run test:e2e -- --debug
```

Run tests in headed mode:
```bash
npm run test:e2e:headed
```

Use Playwright Inspector:
```bash
PWDEBUG=1 npm run test:e2e
```

## CI/CD Integration

Tests are automatically run in GitHub Actions:
- Unit tests run on every push and PR
- E2E tests run on PRs and pushes to main
- Coverage reports are generated

## Best Practices

1. **Write tests first (TDD)**: Write tests before implementation
2. **Keep tests simple**: One assertion per test when possible
3. **Use descriptive names**: Test names should describe what they test
4. **Test behavior, not implementation**: Focus on user-facing behavior
5. **Keep tests fast**: Unit tests should be fast, E2E tests can be slower
6. **Maintain test coverage**: Aim for high coverage but focus on meaningful tests
7. **Keep tests independent**: Tests should not depend on each other
8. **Clean up after tests**: Use `afterEach` or `afterAll` to clean up

## Common Patterns

### Testing Async Operations

```tsx
it('should handle async operations', async () => {
  const { findByText } = render(<AsyncComponent />);
  const element = await findByText('Loaded');
  expect(element).toBeInTheDocument();
});
```

### Testing Forms

```tsx
it('should submit form', async () => {
  const user = userEvent.setup();
  render(<Form />);
  
  await user.type(screen.getByLabelText('Email'), 'test@example.com');
  await user.click(screen.getByRole('button', { name: /submit/i }));
  
  await waitFor(() => {
    expect(screen.getByText('Success')).toBeInTheDocument();
  });
});
```

### Mocking

```tsx
// Mock a module
jest.mock('../api', () => ({
  fetchData: jest.fn(() => Promise.resolve({ data: 'test' })),
}));

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));
```

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/react)
- [Playwright Documentation](https://playwright.dev)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

