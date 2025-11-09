import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { hideSnackbar } from '@/store/slices/snackbarSlice';
import { Alert, Snackbar as MuiSnackbar } from '@mui/material';

const Snackbar = () => {
  const dispatch = useAppDispatch();
  const { open, message, severity } = useAppSelector((state) => state.snackbar);

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(hideSnackbar());
  };

  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
