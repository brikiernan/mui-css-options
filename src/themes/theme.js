import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    action: {
      disabledOpacity: 'var(--disabled-opacity)',
      hover: 'var(--color-background-surface-hover)',
      selected: 'var(--color-background-surface-selected)',
    },
    background: {
      default: 'var(--color-background-base-default)',
    },
    error: {
      main: '#ff3838', // 'var(--color-text-error)'
    },
    primary: {
      main: '#4dacff', // 'var(--color-background-interactive-default)',
    },
    text: {
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
    },
  },
  shape: {
    borderRadius: 'var(--radius-base)',
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: 'var(--color-text-interactive-default)',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--color-background-surface-default)',
        },
      },
      defaultProps: {
        disablePadding: true,
      },
    },
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
        divider: true,
      },
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: 'var(--color-background-surface-selected)',
            borderLeft: '4px solid var(--color-border-interactive-default)',
            paddingLeft: 12,
          },
          '&.MuiListItemButton-divider': {
            borderBottom: '2px solid var(--color-text-inverse)',
          },
          gap: 16,
          padding: '4px 16px',
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 14,
        },
      },
    },
    MuiListItemText: {
      defaultProps: {
        primaryTypographyProps: {
          noWrap: true,
          color: 'var(--color-text-primary)',
          fontSize: 'var(--font-size-xl)',
          fontWeight: 'var(--font-weight-medium)',
          lineHeight: 'var(--line-height-base)',
        },
        secondaryTypographyProps: {
          noWrap: true,
          color: 'var(--color-text-secondary)',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-regular)',
          lineHeight: 'var(--line-height-sm)',
          maxWidth: '80%',
        },
      },
    },
  },
});
