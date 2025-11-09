import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useDebounce } from './useDebounce';

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('returns initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('initial', 500));

    expect(result.current).toBe('initial');
  });

  it('does not update immediately when value changes', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      {
        initialProps: { value: 'initial' },
      }
    );

    expect(result.current).toBe('initial');

    act(() => {
      rerender({ value: 'updated' });
    });

    expect(result.current).toBe('initial');
  });

  it('updates after delay when value changes', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      {
        initialProps: { value: 'initial' },
      }
    );

    act(() => {
      rerender({ value: 'updated' });
    });

    expect(result.current).toBe('initial');

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe('updated');
  });

  it('uses default delay of 500ms', () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value), {
      initialProps: { value: 'initial' },
    });

    act(() => {
      rerender({ value: 'updated' });
    });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe('updated');
  });

  it('respects custom delay', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 1000),
      {
        initialProps: { value: 'initial' },
      }
    );

    act(() => {
      rerender({ value: 'updated' });
    });

    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(result.current).toBe('initial');

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe('updated');
  });

  it('cancels previous timeout when value changes rapidly', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      {
        initialProps: { value: 'initial' },
      }
    );

    act(() => {
      rerender({ value: 'first' });
    });
    act(() => {
      vi.advanceTimersByTime(200);
    });

    act(() => {
      rerender({ value: 'second' });
    });
    act(() => {
      vi.advanceTimersByTime(200);
    });

    act(() => {
      rerender({ value: 'third' });
    });
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe('third');

    // Verify that intermediate values were not set
    expect(result.current).not.toBe('first');
    expect(result.current).not.toBe('second');
  });

  it('handles number values', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      {
        initialProps: { value: 0 },
      }
    );

    act(() => {
      rerender({ value: 100 });
    });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe(100);
  });

  it('handles object values', () => {
    const initialObj = { name: 'initial' };
    const updatedObj = { name: 'updated' };

    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      {
        initialProps: { value: initialObj },
      }
    );

    act(() => {
      rerender({ value: updatedObj });
    });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toEqual(updatedObj);
  });

  it('handles array values', () => {
    const initialArray = [1, 2, 3];
    const updatedArray = [4, 5, 6];

    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      {
        initialProps: { value: initialArray },
      }
    );

    act(() => {
      rerender({ value: updatedArray });
    });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toEqual(updatedArray);
  });

  it('updates when delay changes', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'initial', delay: 500 },
      }
    );

    act(() => {
      rerender({ value: 'updated', delay: 1000 });
    });

    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(result.current).toBe('initial');

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe('updated');
  });

  it('cleans up timeout on unmount', () => {
    const clearTimeoutSpy = vi.spyOn(globalThis, 'clearTimeout');
    const { unmount } = renderHook(() => useDebounce('test', 500));

    act(() => {
      unmount();
    });

    expect(clearTimeoutSpy).toHaveBeenCalled();
    clearTimeoutSpy.mockRestore();
  });
});
