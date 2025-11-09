import { useAppDispatch } from '@/store/hooks';
import { showSnackbar } from '@/store/slices/snackbarSlice';
import { getErrorMessage } from '@/utils/apiErrorHandler';
import { useEffect } from 'react';

interface UseApiErrorHandlerOptions {
  error: unknown;
  defaultMessage?: string;
  severity?: 'error' | 'warning' | 'info' | 'success';
  enabled?: boolean;
}

export const useApiErrorHandler = ({
  error,
  defaultMessage = 'An error occurred',
  severity = 'error',
  enabled = true,
}: UseApiErrorHandlerOptions) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!enabled || !error) return;

    const errorMessage = getErrorMessage(error, defaultMessage);

    dispatch(
      showSnackbar({
        message: errorMessage,
        severity,
      })
    );
  }, [error, defaultMessage, severity, enabled, dispatch]);
};
