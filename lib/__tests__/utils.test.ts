/**
 * Utility Functions Tests
 * 
 * Unit tests for utility functions demonstrating TDD practices
 */

import { formatDate, capitalize, debounce } from '../utils';

describe('formatDate', () => {
  it('should format a date correctly', () => {
    const date = new Date('2024-01-15');
    const formatted = formatDate(date);
    
    expect(formatted).toMatch(/January 15, 2024/);
  });

  it('should handle different dates', () => {
    const date = new Date('2024-12-25');
    const formatted = formatDate(date);
    
    expect(formatted).toMatch(/December 25, 2024/);
  });
});

describe('capitalize', () => {
  it('should capitalize the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('should handle already capitalized strings', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  it('should handle all uppercase strings', () => {
    expect(capitalize('HELLO')).toBe('Hello');
  });

  it('should handle empty strings', () => {
    expect(capitalize('')).toBe('');
  });

  it('should handle single character strings', () => {
    expect(capitalize('a')).toBe('A');
  });
});

describe('debounce', () => {
  jest.useFakeTimers();

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('should delay function execution', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 100);

    debouncedFn();
    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should cancel previous calls when called multiple times', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 100);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    jest.advanceTimersByTime(100);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should pass arguments correctly', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 100);

    debouncedFn('arg1', 'arg2');
    jest.advanceTimersByTime(100);

    expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');
  });
});

