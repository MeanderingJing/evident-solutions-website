/**
 * Utility Functions
 * 
 * Collection of utility functions used throughout the application.
 * These functions provide common operations like date formatting, string manipulation, and function debouncing.
 */

/**
 * Formats a Date object to a human-readable string in US locale format.
 * 
 * @param {Date} date - The date object to format
 * @returns {string} A formatted date string (e.g., "January 15, 2024")
 * 
 * @example
 * ```ts
 * const date = new Date('2024-01-15');
 * const formatted = formatDate(date);
 * // Returns: "January 15, 2024"
 * ```
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Capitalizes the first letter of a string and lowercases the rest.
 * 
 * @param {string} str - The string to capitalize
 * @returns {string} The capitalized string, or the original string if empty
 * 
 * @example
 * ```ts
 * capitalize('hello world'); // Returns: "Hello world"
 * capitalize('HELLO'); // Returns: "Hello"
 * capitalize(''); // Returns: ""
 * ```
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Creates a debounced version of a function that delays execution until after wait time has passed.
 * Useful for limiting the rate of function calls, such as search input handlers.
 * 
 * @template T - The function type to debounce
 * @param {T} func - The function to debounce
 * @param {number} wait - The number of milliseconds to wait before executing the function
 * @returns {(...args: Parameters<T>) => void} A debounced version of the function
 * 
 * @example
 * ```ts
 * const handleSearch = debounce((query: string) => {
 *   console.log('Searching for:', query);
 * }, 300);
 * 
 * handleSearch('test'); // Will execute after 300ms of no calls
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

