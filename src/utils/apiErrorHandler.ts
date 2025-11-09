import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const getErrorMessage = (
  error: unknown,
  defaultMessage: string = 'An error occurred'
): string => {
  if (!error) return defaultMessage;

  // Check if it's an RTK Query error
  if (typeof error === 'object' && 'status' in error) {
    const rtkError = error as FetchBaseQueryError;

    // Handle different error types
    if (rtkError.status === 'FETCH_ERROR') {
      return 'Network error. Please check your connection.';
    }

    if (rtkError.status === 'PARSING_ERROR') {
      return 'Error parsing response data.';
    }

    // Handle HTTP status codes
    if (typeof rtkError.status === 'number') {
      if (rtkError.status === 404) {
        return 'Resource not found.';
      }
      if (rtkError.status === 429) {
        return 'Too many requests. Please try again later.';
      }
      if (rtkError.status >= 500) {
        return 'Server error. Please try again later.';
      }
    }

    // Try to extract message from error data
    if ('data' in rtkError && rtkError.data) {
      if (typeof rtkError.data === 'object' && rtkError.data !== null) {
        const data = rtkError.data as { message?: string; error?: string };
        if (data.message) {
          return data.message;
        }
        if (data.error) {
          return data.error;
        }
      }
      if (typeof rtkError.data === 'string') {
        return rtkError.data;
      }
    }
  }

  // Handle serialized errors
  if (typeof error === 'object' && 'message' in error) {
    return (error as { message: string }).message;
  }

  // Handle string errors
  if (typeof error === 'string') {
    return error;
  }

  return defaultMessage;
};
