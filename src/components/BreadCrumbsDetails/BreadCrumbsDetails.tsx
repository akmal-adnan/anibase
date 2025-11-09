import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';

type BreadCrumbsDetailsProps = {
  title: string;
  separator?: string;
};

const BreadCrumbsDetails = ({
  title,
  separator = '/',
}: BreadCrumbsDetailsProps) => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={separator}
      sx={{
        marginBottom: '1.5rem',
        '& .MuiBreadcrumbs-separator': {
          color: 'rgba(255, 255, 255, 0.7)',
          margin: '0 0.5rem',
        },
        '& .MuiLink-root': {
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            color: 'var(--text-white)',
            textDecoration: 'underline',
          },
        },
        '& .MuiTypography-root': {
          color: 'var(--text-white-constant) !important',
          fontSize: 'var(--p3-size)',
          fontWeight: 'var(--font-medium)',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          maxWidth: { xs: '300px', md: '500px' },
        },
      }}
    >
      <Link component={RouterLink} to="/">
        Home
      </Link>
      <Typography>{title}</Typography>
    </Breadcrumbs>
  );
};

export default BreadCrumbsDetails;
